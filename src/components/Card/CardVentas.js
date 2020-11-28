import React from "react";
import {
  CardContent,
  Card,
  CardMedia,
  CardActions,
  Button,
  CardActionArea,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

const CardVentas = (props) => {
  const useStyles = makeStyles({
    medCard: {
      maxWidth: "400px",
    },
    carrito: {
      display: "flex",
      justifyContent: "center",
    },
    root: {
      padding: 0,
    },
    content: {
      maxHeight: "500px",
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.medCard}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={props.imagenProducto}
          />
          <CardContent
            className={classes.content}
            classes={{ root: classes.root }}
          ></CardContent>
        </CardActionArea>

        <CardActions className={classes.carrito}>
          <Button>
            <AddShoppingCartIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardVentas;
