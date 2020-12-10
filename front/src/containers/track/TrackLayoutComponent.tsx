import React from "react";
import { connect } from "react-redux";

import * as Models from "../../models/TrackModel";
import { AppState } from "../../models";

interface Props {
  track: Models.trackType[];
}

const TrackLayoutComponent: React.FC<Props> = ({
  track
}) => {
  return (
    <>
      { track.length > 0 ? track.map(tk => (
        <div key={tk.id}>
          <h4>{ tk.name }</h4>
          { tk.playUrl ? <button>Play</button> : <p>NO MP3 URL</p>}
        </div>
      )) 
      : 
        <>
          <div className="artist">
            <h1>No Result</h1>
            <img
              alt="NoResultImage"
              src="https://i.scdn.co/image/ab67616d00001e0268b12ccdf28b19a63645d245"
            />
          </div>
        </>
      }
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  track: state.track.tracks
});

export default connect(
  mapStateToProps
)(TrackLayoutComponent);