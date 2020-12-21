import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    width: "100%"
  }
});

function createData(
  name: string,
  description: string
) {
  return { name, description　};
}

const rows = [
  createData(
    "acousticness",
    "その曲がどれくらいアコースティックなのかを、0.0から1.0までの数字で表します。どれくらいシンセとかエレキ楽器を使わずに演ってるかってこと。多分だけど、「曲の中にアコースティックな部分（時間）がどれだけあるか」とニアイコール。"
  ),
  createData(
    "danceability",
    "その曲がどれだけ踊れるか楽曲なのかを、0.0から1.0までの数字で表します。要するにダンスミュージックっぽさ。テンポやリズムに基づいてるみたいだけどまぁ深く考えなくていいんじゃないかな。踊れば。"
  ),
  createData(
    "energy",
    "曲のエネルギー量を0.0から1.0の以下略。速くて騒々しい曲はエネルギーが高くなり、逆に静かでゆっくりな曲は低いようです。0.5はまさに冷静と情熱の間。ちがうか。"
  ),
  createData(
    "instrumentalness",
    "どれくらい歌(AhとかOhは歌に含まない)が無いかを0.0から1.0で。ラップのようなThe歌詞みたいな部分が多いほど、この値は低くなります。公式によると、0.5を超えてればだいたいインストなんじゃねーかと。"
  ),
  createData(
    "liveness",
    "ライブっぽさ。0.0から1.0。基準は「観客がいるかどうか（歓声とかかな）」で、0.8を超えたらまぁライブ音源でしょと。2階席聞こえるー？"
  ),
  createData(
    "valence",
    "曲のポジティブさ(0.0〜1.0)。これに関してはよくわからない。"
  )
];

const ParamsDescriptionComponent = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Description
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.table}
      >
        <DialogTitle id="alert-dialog-title">
          {"Spotifyが出しているパラメータの説明"}
        </DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Params Name</TableCell>
                  <TableCell align="left">説明</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ParamsDescriptionComponent;