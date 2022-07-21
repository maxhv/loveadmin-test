import React, {ReactNode} from "react";

export default interface Props {
  title?: string,
  isOpened: boolean,
  onClose: (e: React.MouseEvent<HTMLElement>) => void,
  children?: ReactNode,
}
