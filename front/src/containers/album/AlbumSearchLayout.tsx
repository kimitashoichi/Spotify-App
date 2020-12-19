import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { getAlbumAction } from "../../actions/albumAction";
import * as Model from "../../models/AlbumModel";
import { AppState } from "../../models";


interface Props {
  token: string;
}

interface DispathcProps {
  searchAlbums: (payload: Model.searchKey) => void;
}

type DefaultProps = Props & DispathcProps;

const AlbumSearchLayout: React.FC<DefaultProps> = ({
  token,
  searchAlbums
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

  const handleOnReset = async () => {
    const payload: Model.searchKey = {
      searchInput: " ",
      token: token
    };
    setSearchWord("");
    await searchAlbums(payload);
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
  searchAlbums: payload => getAlbumAction.start(payload)
 }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumSearchLayout);
