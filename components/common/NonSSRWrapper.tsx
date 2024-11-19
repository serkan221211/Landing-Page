import { Fragment, PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';

const NonSSRWrapper = (props: PropsWithChildren) => (
  <Fragment>{props.children}</Fragment>
);

export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
