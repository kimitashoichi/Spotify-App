import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import * as TrackModel from "../models/TrackModel";
import * as AlbumModel from "../models/AlbumModel";
import * as ArtistModel from "../models/ArtistModel";
import { getAlbumAction } from "../actions/albumAction";
import { getArtistAction } from "../actions/artistAction";
import { getTracksAction } from "../actions/trackAction";
import { AppState } from "../models";


interface Props {
  token: string;
}

interface DispathcProps {
  searchTracks: (payload: TrackModel.searchKey) => void;
  searchAlbums: (payload: AlbumModel.searchKey) => void;
  searchArtists: (payload: ArtistModel.searchKey) => void;
}

type DefaultProps = Props & DispathcProps;

const SearchLayout: React.FC<DefaultProps> = ({
  token,
  searchTracks,
  searchAlbums,
  searchArtists
}) => {
  const [searchWord, setSearchWord] = useState<string>("");

  useEffect(() => {
    searchAllData(); 
  }, [searchWord])

  const handleOnSearchTracks = async () => {
    const payload: TrackModel.searchKey = {
      searchInput: searchWord,
      token: token
    };
    if (payload.searchInput !== "") {
      await searchTracks(payload);
    }
  };

  const handleOnSearchAlbums = async () => {
    const payload: TrackModel.searchKey = {
      searchInput: searchWord,
      token: token
    };
    if (payload.searchInput !== "") {
      await searchAlbums(payload);
    }
  };

  const handleOnSearchArtists = async () => {
    const payload: TrackModel.searchKey = {
      searchInput: searchWord,
      token: token
    };
    if (payload.searchInput !== "") {
      await searchArtists(payload);
    }
  };

  const searchAllData = async () => {
    handleOnSearchTracks();
    handleOnSearchAlbums();
    handleOnSearchArtists();
  }

  const handleOnReset = async () => {
    const payload: TrackModel.searchKey = {
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
  searchTracks: payload => getTracksAction.start(payload),
  searchAlbums: payload => getAlbumAction.start(payload),
  searchArtists: payload => getArtistAction.start(payload)
 }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchLayout);
