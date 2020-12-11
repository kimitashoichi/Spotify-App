import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { getTracksAction } from "../../actions/trackAction";
import * as Model from "../../models/TrackModel";
import { AppState } from "../../models";


interface Props {
  token: string;
}

interface DispathcProps {
  searchTracks: (payload: Model.searchKey) => void;
}

type DefaultProps = Props & DispathcProps;

const TrackSearchLayout: React.FC<DefaultProps> = ({
  token,
  searchTracks
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

  const handleOnReset = async () => {
    const payload: Model.searchKey = {
      searchInput: " ",
      token: token
    };
    setSearchWord("");
    await searchTracks(payload);
  }

  return (
    <>
      <input
        placeholder="Input Keyword..."
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button onClick={handleOnReset}>Reset</button>
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  //
});

const mapDispatchToProps = (dispatch: Dispatch) => 
 bindActionCreators({
  searchTracks: payload => getTracksAction.start(payload)
 }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackSearchLayout);
