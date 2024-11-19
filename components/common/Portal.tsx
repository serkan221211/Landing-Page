import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import NonSSRWrapper from "./NonSSRWrapper";

type Props = PropsWithChildren;

const Portal = ({ children }: Props) => {
  return <NonSSRWrapper>{createPortal(children, document.body)}</NonSSRWrapper>;
};

export default Portal;
