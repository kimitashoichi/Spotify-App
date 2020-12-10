import React, { useState, FormEvent, useEffect, ChangeEvent } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { getArtistAction } from "../../actions/searchArtistAction";
import * as Model from "../../models/ArtistModel";
import { AppState } from "../../models";


interface Props {
  token: string;
}

interface DispathcProps {
  searchArtists: (payload: Model.searchKey) => void;
}

type DefaultProps = Props & DispathcProps;

const ArtistSearchLayout: React.FC<DefaultProps> = ({
  token,
  searchArtists
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
      await searchArtists(payload);
    }
  };

  return (
    <>
      <div>
        <h1>アーティスト検索</h1>
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
  //
});

const mapDispatchToProps = (dispatch: Dispatch) => 
 bindActionCreators({
  searchArtists: payload => getArtistAction.start(payload)
 }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistSearchLayout);
