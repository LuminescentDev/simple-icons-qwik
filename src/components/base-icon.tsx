import { component$, Slot } from '@builder.io/qwik';

import { BaseIconProps } from '../icon-props';
import fallbackProps from '../default-props';

export default component$(({
  size = fallbackProps.size,
  ...restProps
}: BaseIconProps) => {
  return <svg
    {...restProps}
    xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'
    width={size} height={size}
  >
    <Slot/>
  </svg>;
});
