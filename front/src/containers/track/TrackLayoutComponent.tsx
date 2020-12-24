import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import * as Models from "../../models/TrackModel";
import { getDetailKey } from "../../models/UtilModels";
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
  getTrackDetails: (payload: getDetailKey) => void;
  getTrackParameters: (payload: getDetailKey) => void;
}

const TrackLayoutComponent: React.FC<Props> = ({
  token,
  track,
  getTrackDetails,
  getTrackParameters,
  isLoading
}) => {

  const handleOnTrackDetails = async (searchId: string) => {
    const payload: getDetailKey = {
      trackId: searchId,
      token: token
    };
    await getTrackDetails(payload);
  }

  const handleOnTrackParameters = async (searchId: string) => {
    const payload: getDetailKey = {
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
                  <LinkComponent src={`/show/${tk.id}`}>
                  <img alt={tk.name}
                    src={tk.image === undefined ? undefined : tk.image.url}
                    onClick={() => getDetailInformations(tk.id)}
                  />
                  </LinkComponent>
                  <h4>{ tk.name }</h4>
                </div>
              )
              : 
                <>
                  <div className="track">
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