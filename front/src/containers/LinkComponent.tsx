import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

interface DefaultProps {
  src: string;
  children?: string | ReactElement<any>;
}

const LinkComponent: FC<DefaultProps> = ({
  src,
  children
}) => {
  return (
    <Link to={src} style={{ textDecoration: 'none' }}>{children}</Link>
  )
};

export default LinkComponent;