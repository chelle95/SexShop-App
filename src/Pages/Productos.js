import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Container,
  CardMedia,
} from "@material-ui/core";

const Productos = () => {
  const useStyles = makeStyles({
    productos: {
      marginTop: "250px",
      width: "300px",
      height: "300px",
      backgroundColor: "pink",
    },
    imagenIlustrativa: {
      width: "300px",
      height: "300px",
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.productos}>
      <Container>
        <Card>
          <CardMedia className={classes.imagenIlustrativa}>
            alo polisia
          </CardMedia>
        </Card>
      </Container>
    </div>
  );
};

export default Productos;
