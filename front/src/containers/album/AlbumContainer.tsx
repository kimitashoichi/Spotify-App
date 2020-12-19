import React from "react";

import AlbumSearchLayout from "./AlbumSearchLayout";
import AlbumLayoutComponent from "./AlbumLayoutComponent";

interface Token {
  token :string;
}

type Props = Token;

const AlbumContainer: React.FC<Props> = ({
  token
}) => {
  return (
    <>
      <AlbumSearchLayout token={token} />
      <AlbumLayoutComponent token={token}/>
    </>
  )
};

export default AlbumContainer;