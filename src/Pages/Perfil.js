import { makeStyles } from "@material-ui/core";
import React from "react";

const Perfil = () => {
  const useStyles = makeStyles({
    alo: {
      marginTop: "250px",
    },
  });
  const classes = useStyles();
  return <div className={classes.alo}>alo</div>;
};

export default Perfil;
