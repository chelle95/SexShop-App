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
import * as carritoActions from "../../store/actions/carrito";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const CardVentas = (props) => {
  //ejecutar acciones con dispatch
  const dispatch = useDispatch();

  const sumarCarrito = async () => {
    await dispatch(carritoActions.agregarCarrito(uuidv4(), props.producto));
  };

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
          <Button onClick={sumarCarrito}>
            <AddShoppingCartIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardVentas;
