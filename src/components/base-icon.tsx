import { component$, Slot } from '@qwik.dev/core';

import { SVGProps } from '@qwik.dev/core';

export interface IconProps extends Omit<
  SVGProps<SVGSVGElement>,
  'width' | 'height' | 'class'
> {
  size?: number;
  class?: string;
}

export interface BaseIconProps extends IconProps {
  name: string;
}

export const BaseIcon = component$(
  ({ name, size = 24, ...restProps }: BaseIconProps) => {
    return (
      <svg
        {...restProps}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        class={{
          [`simple simple-${name}`]: true,
          [`${restProps.class}`]: !!restProps.class,
        }}
      >
        <Slot />
      </svg>
    );
  }
);
