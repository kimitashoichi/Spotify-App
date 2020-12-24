import React from "react";
import { connect } from "react-redux";

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { AppState } from "../../models";
import * as Models from "../../models/TrackModel";
import ParamsDescriptionComponent from "../../components/ParamsDescriptionComponent";
import LinkComponent from "../LinkComponent";
import HomeIcon from "../../components/HomeIcon";

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
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }),
);

interface StateProps {
  track: Models.trackBasicDetail;
};

const DetaiBasic: React.FC<StateProps> = ({
  track
}) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <LinkComponent src={"/"}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<HomeIcon />}
            style={{ marginRight: '30px' }}
          >Home</Button>
        </LinkComponent>
        <CardMedia
          className={classes.cover}
          image={track.image.url}
          title={track.name}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <h1>{track.name}</h1>
            { track.artists.map((artist) => {
              return <h2 key={artist}>{ artist }</h2>
            })}
          </CardContent>
          {/* TODO:クリックでサンプルを再生できるようにする */}
          {/* <div className={classes.controls}>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
          </div> */}
          <ParamsDescriptionComponent />
        </div>
      </Card>
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  track: state.track.track
});

export default connect(
  mapStateToProps
)(DetaiBasic);