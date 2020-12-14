import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import * as Models from "../../models/TrackModel";
import { 
  getTrackDetailsAction,
  getTrackParametersAction
} from "../../actions/trackAction";
import { AppState } from "../../models";
import LinkComponent from "../LinkComponent";
import "./track.css";


interface Props {
  token: string;
  track: Models.trackType[];
  isLoading: boolean;
  getTrackDetails: (payload: Models.getDetailKey) => void;
  getTrackParameters: (payload: Models.getDetailKey) => void;
}

const TrackLayoutComponent: React.FC<Props> = ({
  token,
  track,
  getTrackDetails,
  getTrackParameters,
  isLoading
}) => {

  const handleOnTrackDetails = async (searchId: string) => {
    const payload: Models.getDetailKey = {
      trackId: searchId,
      token: token
    };
    await getTrackDetails(payload);
  }

  const handleOnTrackParameters = async (searchId: string) => {
    const payload: Models.getDetailKey = {
      trackId: searchId,
      token: token
    };
    await getTrackParameters(payload);
  }

  const getDetailInformations = async (searchId: string) => {
    handleOnTrackDetails(searchId);
    handleOnTrackParameters(searchId);
  }

  return (
    <>
      { isLoading === false ?
              ( track.length > 0 ? track.map(tk => 
                <div key={tk.id} className="track">
                  <img alt={tk.name}
                    src={tk.image === undefined ? undefined : tk.image.url}
                  />
                  <h4>{ tk.name }</h4>
                  { tk.playUrl ? 
                    <LinkComponent src={`/show/${tk.id}`}>
                      <button value={tk.id} onClick={() => getDetailInformations(tk.id)}>Play</button>
                    </LinkComponent>
                    : 
                    <p>NO MP3 URL</p>}
                </div>
              )
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
              )
        : 
        <>
          <h1>Now Loading....</h1>
        </>
      }
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  track: state.track.tracks,
  isLoading: state.track.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    getTrackDetails: payload => getTrackDetailsAction.start(payload),
    getTrackParameters: payload => getTrackParametersAction.start(payload),
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackLayoutComponent);