import React, { useState, FormEvent, useEffect, ChangeEvent } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { getTracksAction } from "../actions/searchTrackAction"
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

const TopSearchLayout: React.FC<DefaultProps> = ({
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
        <h1>ログインしました</h1>
        <h2>{ token }</h2>
        <h2>{ isLoading }</h2>
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
)(TopSearchLayout);