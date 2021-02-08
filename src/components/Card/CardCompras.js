import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Select,
  InputLabel,
  IconButton,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useDispatch } from "react-redux";
import * as carritoActions from "../../store/actions/carrito";

const useStyles = makeStyles({
  root: {
    minWidth: "300px",
    minHeight: "50px",
    margin: "10px 0px",
  },
  imagenIlustrativa: {
    width: "100px",
    height: "100px",
  },
  productoResumen: {
    display: "flex",
  },
  detallesProducto: {
    display: "block",
  },
  cantidadYtotal: {
    display: "flex",
    justifyContent: "space-between",
    width: "20%",
    marginLeft: "50px",
  },
  input: {
    padding: "10px 26px 10px 12px",
  },
  cantidadInput: {
    display: "block",
  },
  tachito: {
    display: "flex",
    alignSelf: "flex-end",
    marginLeft: "auto",
  },
});

const CardCompras = (props) => {
  const dispatch = useDispatch();

  const eliminarProducto = async () => {
    await dispatch(carritoActions.eliminarCarrito(props.producto.id));
  };

  const [numero, setNumero] = useState();
  const handleChange = (event) => {
    setNumero(event.target.value);
  };

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.productoResumen}>
            <img
              className={classes.imagenIlustrativa}
              src={props.producto.imagen}
              alt=""
            />
            <div className={classes.detallesProducto}>
              <Typography variant="h5">{props.producto.nombre}</Typography>
              <p>{props.producto.descripcion}</p>
            </div>
            <div className={classes.cantidadYtotal}>
              <FormControl className={classes.cantidadInput}>
                <InputLabel id="cantidad">Cantidad</InputLabel>
                <Select value={numero} defaultValue={1} onChange={handleChange}>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
              <div>
                <InputLabel id="total">Total</InputLabel>
                <Typography>${props.producto.precio}</Typography>
              </div>
            </div>
            <div className={classes.tachito}>
              <IconButton onClick={() => eliminarProducto()}>
                <DeleteForeverIcon />
              </IconButton>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardCompras;
