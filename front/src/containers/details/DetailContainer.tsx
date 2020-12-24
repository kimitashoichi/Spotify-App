import React from "react";
import { connect } from "react-redux";

import DetaiBasic from "./DetailBasic";
import DetaiParamslLayout from "./DetailParamerters";
import CircularIndeterminate from "../../components/LoadingSpinner";
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
        <CircularIndeterminate />
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