import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import { getDetailKey } from "../../models/UtilModels";
import { artistTopTracks } from "../../models/ArtistModel";
import { AppState } from "../../models";
import LinkComponent from "../LinkComponent";
import { 
  getTrackDetailsAction,
  getTrackParametersAction
} from "../../actions/trackAction";
import HomeIcon from "../../components/HomeIcon";
import CircularIndeterminate from "../../components/LoadingSpinner";

// TODO: Headeing属性にcontentを持たせろという警告が出ているので修正する

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
  artistTopTracks: artistTopTracks;
  isLoading: boolean;
  getTrackDetails: (payload: getDetailKey) => void;
  getTrackParameters: (payload: getDetailKey) => void;
}

const ArtistTrackLayout: React.FC<Props> = ({
  token,
  artistTopTracks,
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

  return (
    <>
      { isLoading === false ?
          <div>
            <Card className={classes.root}>
              <LinkComponent src={"/"}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<HomeIcon />}
                  style={{ marginRight: '30px' }}
                >
                  Home
                </Button>
              </LinkComponent>
              <CardMedia
                className={classes.cover}
                image={artistTopTracks.artist.image}
                title={artistTopTracks.artist.name}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <h1>{artistTopTracks.artist.name}</h1>
                </CardContent>
              </div>
            </Card>
          </div>
          :
          <CircularIndeterminate />
      }

      { isLoading === false ?
        ( artistTopTracks.tracks.length > 0 ? artistTopTracks.tracks.map(tk =>
          <div key={tk.id} className={classes.tracks}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={tk.name} src={tk.image.url} />
              </ListItemAvatar>

              {/* 表示はできたのでレイアウトを変更する */ }
              <ListItemText primary={tk.name} />
              { tk.artists.map((name) => {
                return <p key={name}>{name+"/"}</p>
              })}
              <LinkComponent src={`/show/${tk.id}`}>
                <Button color="secondary" size="small"
                  onClick={() => getDetailInformations(tk.id)}>Go Detail</Button>           
              </LinkComponent>
            </ListItem>
            <Divider variant="inset" />
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
          <h1></h1>
        </>
      }
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  artistTopTracks: state.artist.topTracks,
  isLoading: state.artist.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    getTrackDetails: payload => getTrackDetailsAction.start(payload),
    getTrackParameters: payload => getTrackParametersAction.start(payload),
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistTrackLayout);