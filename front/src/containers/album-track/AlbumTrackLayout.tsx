import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';

import * as Models from "../../models/AlbumModel";
import { getDetailKey } from "../../models/TrackModel";
import { AppState } from "../../models";
import LinkComponent from "../LinkComponent";
import { 
  getTrackDetailsAction,
  getTrackParametersAction
} from "../../actions/trackAction";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'black',
      marginTop: 50
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    },
    content: {
      color: 'white',
    },
    cover: {
      width: 300,
      height: 300,
    },
    tracks: {
      maxWidth: '50%',
      marginTop: theme.spacing(1),
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  }),
);

interface Props {
  token: string;
  albumTracks: Models.albumTracks;
  isLoading: boolean;
  getTrackDetails: (payload: getDetailKey) => void;
  getTrackParameters: (payload: getDetailKey) => void;
}

const AlbumTrackLayout: React.FC<Props> = ({
  token,
  albumTracks,
  isLoading,
  getTrackDetails,
  getTrackParameters
}) => {

  const classes = useStyles();

  const handleOnTrackDetails = async (searchId: string) => {
    const payload: getDetailKey = {
      trackId: searchId,
      token: token
    };
    await getTrackDetails(payload);
  }

  const handleOnTrackParameters = async (searchId: string) => {
    const payload: getDetailKey = {
      trackId: searchId,
      token: token
    };
    await getTrackParameters(payload);
  }

  const getDetailInformations = async (searchId: string) => {
    handleOnTrackDetails(searchId);
    handleOnTrackParameters(searchId);
  }

  const action = (searchId: string) => (
    <LinkComponent src={`/show/${searchId}`}>
      <Button color="secondary" size="small" onClick={() => getDetailInformations(searchId)}>
        Go Detail
      </Button>           
    </LinkComponent>
  );
  
  return (
    <>
      { isLoading === false ?
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.cover}
                image={ albumTracks.album.url }
                title={ albumTracks.album.name }
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <h1>{albumTracks.album.name}</h1>
                  <h2>{albumTracks.tracks[0].artist[0]}</h2>
                </CardContent>
              </div>
            </Card>
          </div>
          :
          <h1>Now Loading ....</h1>
      }

       { isLoading === false ?
              ( albumTracks.tracks.length > 0 ? albumTracks.tracks.map(tk =>
               <div key={tk.id} className={classes.tracks}>
                 <SnackbarContent message={tk.name} action={action(tk.id)} />
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
              )
        : 
        <>
          <h1>Now Loading....</h1>
        </>
      }
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  albumTracks: state.album.albumTracks,
  isLoading: state.album.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    getTrackDetails: payload => getTrackDetailsAction.start(payload),
    getTrackParameters: payload => getTrackParametersAction.start(payload),
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumTrackLayout)