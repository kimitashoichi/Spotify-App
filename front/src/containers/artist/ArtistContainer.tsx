import React from "react";

import ArtistLayoutComponent from "./ArtistLayoutComponent";
import ArtistSearchLayout from "./ArtistSearchLayout";

interface Token {
  token: string;
}

type Props = Token;

const ArtistContainer: React.FC<Props> = ({
  token
}) => {
  return (
    <>
      <ArtistSearchLayout token={token} />
      <ArtistLayoutComponent />
    </>
  )
};

export default ArtistContainer;