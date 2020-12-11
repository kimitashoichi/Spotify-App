import React from "react";

import TrackLayoutComponent from "./TrackLayoutComponent";
import TrackSearchLayout from "./TrackSearchLayout";

interface Token {
  token: string;
}

type Props = Token;

const TrackContainer: React.FC<Props> = ({
  token
}) => {
  return (
    <>
      <TrackSearchLayout token={token} />
      <TrackLayoutComponent token={token} />
    </>
  )
};

export default TrackContainer;