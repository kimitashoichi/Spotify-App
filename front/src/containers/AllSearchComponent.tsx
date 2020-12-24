import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { searchKey } from "../models/UtilModels";
import { getAlbumAction } from "../actions/albumAction";
import { getArtistAction } from "../actions/artistAction";
import { getTracksAction } from "../actions/trackAction";

interface Props {
  token: string;
}

interface DispathcProps {
  searchTracks: (payload: searchKey) => void;
  searchAlbums: (payload: searchKey) => void;
  searchArtists: (payload: searchKey) => void;
}

type DefaultProps = Props & DispathcProps;

const SearchLayout: React.FC<DefaultProps> = ({
  token,
  searchTracks,
  searchAlbums,
  searchArtists
}) => {
  const [searchWord, setSearchWord] = useState<string>("");

  // TODO: 警告が出ているので修正する
  useEffect(() => {
    searchAllData();
  }, [searchWord])

  const handleOnSearch = async () => {
    const payload: searchKey = {
      searchInput: searchWord,
      token: token
    };
    if (payload.searchInput !== "") {
      await searchTracks(payload);
      await searchAlbums(payload);
      await searchArtists(payload);
    }
  };

  const searchAllData = async () => {
    if (searchWord !== "") {
      handleOnSearch();
    } else {
      handleOnReset();
    }
  }

  const handleOnReset = async () => {
    const payload: searchKey = {
      searchInput: " ",
      token: token
    };
    setSearchWord("");
    await searchTracks(payload);
    await searchAlbums(payload);
    await searchArtists(payload);
  };

  return (
    <>
      <input
        placeholder="Type your search"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
    </>
  )
};

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = (dispatch: Dispatch) => 
 bindActionCreators({
  searchTracks: payload => getTracksAction.start(payload),
  searchAlbums: payload => getAlbumAction.start(payload),
  searchArtists: payload => getArtistAction.start(payload)
 }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchLayout);
