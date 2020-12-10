import React from "react";
import { connect } from "react-redux";

import * as Models from "../../models/ArtistModel";
import { AppState } from "../../models";
import "./artist.css"

interface Props {
  artist: Models.artistType[];
}

const ArtistLayoutComponent: React.FC<Props> = ({
  artist
}) => {
  return (
    <>
      {
        artist.length > 0 ? artist.map(artist => 
        <div key={artist.id} className="artist">
          <img
            alt={artist.name}
            src={artist.image === undefined ? undefined : artist.image.url}
          />
          <p>{ artist.name }</p>
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

export default connect(
  mapStateToProps
)(ArtistLayoutComponent);