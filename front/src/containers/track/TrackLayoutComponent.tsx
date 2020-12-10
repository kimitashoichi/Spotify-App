import React from "react";
import { connect } from "react-redux";

import * as Models from "../../models/TrackModel";
import { AppState } from "../../models";

interface Props {
  isLoading: boolean;
  track: Models.trackType[];
}

const TrackLayoutComponent: React.FC<Props> = ({
  isLoading,
  track
}) => {
  return (
    <>
      { track.length > 0 ? track.map(tk => (
        <div key={tk.id}>
          <p>{  }</p>
          <h4>{ tk.name }</h4>
          { tk.playUrl ? <button>Play</button> : <p>NO MP3 URL</p>}
        </div>
      )) : <><p>Now Loading Tracks...</p></>}
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.track.isLoading,
  track: state.track.tracks
});

export default connect(
  mapStateToProps
)(TrackLayoutComponent);