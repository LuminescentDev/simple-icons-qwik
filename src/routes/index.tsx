import { component$ } from '@qwik.dev/core';
import { SiSimpleicons } from '../';

export default component$(() => {
  return (
    <>
      <h1>Simple Icons</h1>
      <SiSimpleicons size={56} fill={'currentColor'} />
    </>
  );
});
