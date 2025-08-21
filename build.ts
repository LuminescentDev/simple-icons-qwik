import { mkdir, writeFile } from "fs/promises";
import { createWriteStream, readFileSync } from "fs";

import * as simpleIcons from "simple-icons";

function buildContent(icon: simpleIcons.SimpleIcon) {
  // remove <svg>...</svg> from string
  const svg = icon.svg.replace(/<svg[^>]*>/, "").replace(/<\/svg>/, "");

  return `<>${svg}</>`;
};

function buildIcon(typesRelPath: string, baseIconRelPath: string) {
  const template = readFileSync("./icon.tsx.template", "utf8")
    .replace("{{TYPES_REL_PATH}}", typesRelPath)
    .replace("{{BASE_ICON_REL_PATH}}", baseIconRelPath);

  return function(name: string, content: string) {
    return template
      .replace("{{ICON_NAME}}", name)
      .replace("{{CONTENT}}", content);
  };
};

function buildExportLine(name: string, iconsRelPath: string) {
  return `export { default as ${name} } from '${iconsRelPath}${name}';\n`;
}


async function build() {
  // build icons
  const iconsPath = "./src/components/icons/";
  const build = buildIcon("../../icon-props", "../base-icon");

  await mkdir(iconsPath, {recursive: true});
  await Promise.all(Object.keys(simpleIcons).map((k) => {
    const icon: any = simpleIcons[k as keyof typeof simpleIcons];
    const name = k.replace(/si/g, 'Si');

    return writeFile(`${iconsPath}${name}.tsx`, build(name, buildContent(icon)), "utf8");
  }));

  // export icons
  const indexFile = createWriteStream("./src/index.ts", "utf8");
  Object.keys(simpleIcons).forEach(k => {
    const name = k.replace(/si/g, 'Si');

    indexFile.write(buildExportLine(name, "./components/icons/"));
  });
  indexFile.close();
}

build();
