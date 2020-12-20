import React from "react";
import { connect } from "react-redux";

import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { AppState } from "../../models";
import * as Models from "../../models/TrackModel";

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
  track: Models.trackType;
};

const DetaiBasic: React.FC<StateProps> = ({
  track
}) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={track.image.url}
          title={track.name}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <h1>{track.name}</h1>
            <h2>{track.artists}</h2>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
          </div>
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