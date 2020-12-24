import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import * as Models from "../../models/ArtistModel";
import { AppState } from "../../models";
import LinkComponent from "../LinkComponent";
import {
  getArtistTopTracksAction
} from "../../actions/artistAction";
import "./artist.css";

interface Props {
  token: string;
  artist: Models.artistType[];
  getArtistTopTracks: (payload: Models.requestKey) => void;
}

//  TOPトラックを取得できるのは10曲だけ => 今はとりあえずそれでOK
//  この部分はAPI通信なのでリクエストのエンドポイントを変更するだけで取得できるデータを変更できる

const ArtistLayoutComponent: React.FC<Props> = ({
  token,
  artist,
  getArtistTopTracks
}) => {

  const handleOnTopTracks = async (artist: Models.artistType) => {
    const payload: Models.requestKey = {
      artistId: artist.id,
      token: token,
      name: artist.name,
      image: artist.image.url
    };
    await getArtistTopTracks(payload);
  }

  return (
    <>
      { artist.length > 0 ? artist.map(artist => 
        <div key={artist.id} className="artist">
          <LinkComponent src={`/artist/${artist.id}`}>
            <img
              alt={artist.name}
              src={artist.image === undefined ? undefined : artist.image.url}
              onClick={() => handleOnTopTracks(artist)}
            />
          </LinkComponent>
          <h3 style={{ marginBottom : '20px'}}>{ artist.name }</h3>
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
      }
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  artist: state.artist.artist
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    getArtistTopTracks: payload => getArtistTopTracksAction.start(payload)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistLayoutComponent);