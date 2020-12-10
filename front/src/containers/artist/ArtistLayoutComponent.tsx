import React from "react";
import { connect } from "react-redux";

import * as Models from "../../models/ArtistModel";
import { AppState } from "../../models";

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
        : <><p>Now Loading Artists...</p></>
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