import React from "react";
import { connect } from "react-redux";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

import { Theme, createStyles, makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { AppState } from "../../models";
import * as Models from "../../models/TrackModel";

interface StateProps {
  track: Models.trackParams;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'black',
      marginTop: 50
    },
    details: {
      display: 'flex',
      justifyContent: 'center',
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
      justifyContent: 'space-around',
      WebkitJustifyContent: 'space-around'
    },
    playIcon: {
      height: 38,
      width: 38,
    }
  }),
);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const DetaiParamslLayout: React.FC<StateProps> = ({
  track
}) => {
  const classes = useStyles();

  const chartData = [
    {
      subject: 'Acousticness',
      params: track.acousticness * 100
    },
    {
      subject: 'Danceability',
      params: track.danceability * 100
    },
    {
      subject: 'Energy',
      params: track.energy * 100
    },
    {
      subject: 'Instrumentalness',
      params: track.instrumentalness * 100
    },
    {
      subject: 'Liveness',
      params: track.liveness * 100
    },
    {
      subject: 'Valence',
      params: track.valence * 100
    },
  ];

  function createData(name: string, params: number) {
    return { name, params};
  }

  const rows = [
    createData('Acousticness', chartData[0].params),
    createData('Danceability', chartData[1].params),
    createData('Energy', chartData[2].params),
    createData('Instrumentalness', chartData[3].params),
    createData('Liveness', chartData[4].params),
    createData('Valence', chartData[5].params),
  ];

  return (
    <>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className={classes.controls}>
              <RadarChart width={450} height={300} data={chartData} >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'white' }}/>
                {/* <PolarRadiusAxis /> データの基準線みたいなAPIコンポーネント*/}
                <Radar name="Mike" dataKey="params" stroke="#84d895" fill="#84d895" fillOpacity={0.8} />
              </RadarChart>
              <TableContainer component={Paper}>
                <Table aria-label="customized table">
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                        <StyledTableCell align="center">{row.params}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  track: state.track.trackParams
});

export default connect(
  mapStateToProps
)(DetaiParamslLayout);