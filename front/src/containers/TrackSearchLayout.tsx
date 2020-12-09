import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { getTracksAction } from "../actions/searchTrackAction";
import * as Model from "../models/TrackModel";
import { AppState } from "../models";


interface Props {
  token: string;
  isLoading?: boolean;
  tracks?: Model.trackType[];
}

interface DispathcProps {
  searchTracks: (payload: Model.searchKey) => void;
}

type DefaultProps = Props & DispathcProps;

const TrackSearchLayout: React.FC<DefaultProps> = ({
  token,
  tracks,
  searchTracks,
  isLoading
}) => {

  const [searchWord, setSearchWord] = useState<string>("");

  useEffect(() => {
      handleOnInput();
  }, [searchWord])

  const handleOnInput = async () => {

    const payload: Model.searchKey = {
      searchInput: searchWord,
      token: token
    };
    if (payload.searchInput !== "") {
      await searchTracks(payload);
    }
  };

  return (
    <>
      <div>
        <h1>曲名検索</h1>
      </div>
      <h3>{ searchWord }</h3>
      <input
        placeholder="Input Keyword..."
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.track.isLoading,
  tracks: state.track.tracks,
});

const mapDispatchToProps = (dispatch: Dispatch) => 
 bindActionCreators({
  searchTracks: payload => getTracksAction.start(payload)
 }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackSearchLayout);
