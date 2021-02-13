import React, { useState } from "react";
import "./carousel.css";
import { Grid, makeStyles } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Pagination from "./Pagination";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Carousel = (props) => {
  const handleChangeIndex = (index) => {
    setIndex(index);
  };
  const [index, setIndex] = useState(0);

  const useStyles = makeStyles({
    root: {
      maxWidth: "400px",
      flexGrow: "1",
      position: "relative",
    },

    slide: {
      padding: "15",
      maxHeight: "600px",
      color: "#fff",
    },

    slideTres: {
      backgroundImage: `url(${props.imagenes})`,
      backgroundSize: "cover",
      WebkitBackgroundSize: "",
      maxHeight: "auto",
      width: "100%",
      height: "600px",
    },
  });

  const classes = useStyles();

  return (
    <Grid container>
      <Grid className="root" item xs={12} md={12} lg={12} xl={12}>
        <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
          <div className={(classes.slide, classes.slideTres)}>slide n°1</div>
          <div className={(classes.slide, classes.slideTres)}>slide n°2</div>
          <div className={(classes.slide, classes.slideTres)}>slide n°3</div>
          <div className={(classes.slide, classes.slideTres)}>slide n°4</div>
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
