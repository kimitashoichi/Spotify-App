import React from "react";
import { connect } from "react-redux";

import DetaiBasic from "./DetailBasic";
import DetaiParamslLayout from "./DetailParamerters";
import { AppState } from "../../models";

interface Token {
  isLoading: boolean;
}

const DetailContainer: React.FC<Token> = ({
  isLoading
}) => {
  return (
    <>
      { isLoading === false ?
        <>
          <DetaiBasic />
          <DetaiParamslLayout />
        </>
        : 
        <h1>Now Loading....</h1>
      }
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.track.isLoading
});

export default connect(
  mapStateToProps
)(DetailContainer);