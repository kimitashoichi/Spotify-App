import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import style from "styled-components"

import * as Styles from "./styles";
import AlbumLayoutComponent from "./album/AlbumLayoutComponent";
import ArtistLayoutComponent from "./artist/ArtistLayoutComponent";
import TrackLayoutComponent from "./track/TrackLayoutComponent";
import SearchLayout from "./AllSearchComponent";
import "./top.css";

const Div = style.div`
  background-color: black;
`;

interface Props {
  token: string;
}

const TopLayout: React.FC<Props> = ({
  token
}) => {
  const [value, setValue] = useState<number>(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <>
      <Div>
        <div className="searchBar-wrapper">
          <div className={Styles.useStyles().root}>
            <AppBar position="static" style={{alignItems: "center", backgroundColor: "black"}}>
              <Tabs value={value} 
                onChange={handleChange} 
                aria-label="simple tabs example" 
                style={{backgroundColor: 'black'}}
              >
                <Tab label="Tracks" {...Styles.a11yProps(0)} />
                <Tab label="Artist" {...Styles.a11yProps(1)} />
                <Tab label="Album" {...Styles.a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SearchLayout token={token} />
            <Styles.TabPanel  value={value} index={0}>
              <TrackLayoutComponent token={token} />
            </Styles.TabPanel>
            <Styles.TabPanel value={value} index={1}>
              <ArtistLayoutComponent token={token} />
            </Styles.TabPanel>
            <Styles.TabPanel value={value} index={2}>
              <AlbumLayoutComponent token={token} />
            </Styles.TabPanel>
          </div>
        </div>
      </Div>
    </>
  )
};

export default TopLayout;
