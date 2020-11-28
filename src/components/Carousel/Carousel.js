import React, { useState } from "react";
import "./carousel.css";
import { Grid } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Pagination from "./Pagination";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Carousel = () => {
  const handleChangeIndex = (index) => {
    setIndex(index);
  };
  const [index, setIndex] = useState(0);
  return (
    <Grid container>
      <Grid className="root" item xs={12} md={12} lg={12} xl={12}>
        <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
          <div className="slide slideUno">slide n°1</div>
          <div className="slide slideDos">slide n°2</div>
          <div className="slide slideTres">slide n°3</div>
        </AutoPlaySwipeableViews>
      </Grid>

      <Grid item xs={12} md={12} lg={12} xl={12}>
        <Pagination
          dots={3}
          index={index}
          onChangeIndex={handleChangeIndex}
        ></Pagination>
      </Grid>
    </Grid>
  );
};

export default Carousel;
