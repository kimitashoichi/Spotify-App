import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { getAlbumAction } from "../actions/searchAlbumAction";
import * as Model from "../models/AlbumModel";
import { AppState } from "../models";


interface Props {
  token: string;
  isLoading?: boolean;
  albums?: Model.albumType[];
}

interface DispathcProps {
  searchAlbums: (payload: Model.searchKey) => void;
}

type DefaultProps = Props & DispathcProps;

const SearchAlbumLayout: React.FC<DefaultProps> = ({
  token,
  albums,
  searchAlbums,
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
      await searchAlbums(payload);
    }
  };

  return (
    <>
      <div>
        <h1>アルバム検索</h1>
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
  isLoading: state.album.isLoading,
  albums: state.album.albums,
});

const mapDispatchToProps = (dispatch: Dispatch) => 
 bindActionCreators({
  searchAlbums: payload => getAlbumAction.start(payload)
 }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAlbumLayout);
