import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { AppState } from "../../models";
import * as Models from "../../models/TrackModel";

interface StateProps {
  track: Models.trackType;
};

const DetailLayout: React.FC<StateProps> = ({
  track
}) => {
  return (
    <>
      <h1 style={{color: 'white'}}>
        OK SHOW TRACK DETAIL COMPONENT!
      </h1>
      <p>{ track.id }</p>
      <p>{ track.name }</p>
      <p>{ track.playUrl }</p>
      <p>{ track.artists }</p>
      <img src={track.image.url}/>
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  track: state.track.track
});

export default connect(
  mapStateToProps
)(DetailLayout);