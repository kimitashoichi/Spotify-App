import React from "react";

import DetailLayout from "./DetailBasic";
import DetaiParamslLayout from "./DetailParamerters";

interface Token {
  token: string
}

const DetailContainer: React.FC<Token> = ({
  token
}) => {
  return (
    <>
      <DetailLayout token={token} />
      <DetaiParamslLayout />
    </>
  )
};

export default DetailContainer;