import { QwikDOMAttributes } from '@builder.io/qwik';

export interface IconProps extends QwikDOMAttributes {
  size?: number,
}

export interface BaseIconProps extends IconProps {
  name: string
}
