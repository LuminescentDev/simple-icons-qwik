import { component$, Slot } from '@builder.io/qwik';

import { BaseIconProps } from '../icon-props';
import fallbackProps from '../default-props';

export default component$(({
  size = fallbackProps.size,
  color = fallbackProps.color,
  strokeWidth = fallbackProps.strokeWidth,
  strokeLinecap = fallbackProps.strokeLinecap,
  strokeLinejoin = fallbackProps.strokeLinejoin,
  ...restProps
}: BaseIconProps) => {
  return <svg
    {...restProps}
    xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'
    width={size} height={size}
    stroke={color} stroke-width={strokeWidth}
    stroke-linecap={strokeLinecap} stroke-linejoin={strokeLinejoin}
  >
    <Slot/>
  </svg>;
});
