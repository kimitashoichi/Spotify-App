import React from "react";
import { connect } from "react-redux";

import { AppState } from "../../models";
import * as Models from "../../models/TrackModel";

interface StateProps {
  track: Models.trackParams;
};

const DetaiParamslLayout: React.FC<StateProps> = ({
  track
}) => {
  return (
    <>
      <h1 style={{color: 'white'}}>
        OK SHOW TRACK DETAIL PARAMS COMPONENT!
      </h1>
      <p>{ track.acousticness }</p>
      <p>{ track.danceability }</p>
      <p>{ track.energy }</p>
      <p>{ track.instrumentalness }</p>
      <p>{ track.liveness }</p>
      <p>{ track.valence }</p>
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  track: state.track.trackParams
});

export default connect(
  mapStateToProps
)(DetaiParamslLayout);