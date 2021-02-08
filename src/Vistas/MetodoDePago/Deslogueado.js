import { makeStyles } from "@material-ui/core";
import React from "react";

const Deslogueado = () => {
  const useStyles = makeStyles({
    deslogueado: {
      marginTop: "300px",
    },
  });
  const classes = useStyles();
  return <div className={classes.deslogueado}>alo polisia</div>;
};

export default Deslogueado;
