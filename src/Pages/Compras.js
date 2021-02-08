import { Fragment, React, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  Card,
  CardActions,
  Button,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import * as carritoActions from "../store/actions/carrito";
import { useSelector, useDispatch } from "react-redux";
import CardCompras from "../components/Card/CardCompras";

const Compras = (props) => {
  const useStyles = makeStyles({
    root: {
      marginTop: 64,
    },
    compras: {
      backgroundColor: "#b8b0b0",
      maxWidth: 700,
      minWidth: 300,
      maxHeight: 450,
      minHeight: 600,
      marginTop: "150px",
      overflowY: "scroll",
    },
    title: {
      fontSize: 20,
    },

    resumen: {
      backgroundColor: "#cdc9c3",
      maxWidth: 600,
      minWidth: 300,
      maxHeight: 450,
      minHeight: 300,
      marginTop: "150px",
      marginLeft: "50px",
    },
    compra: {
      display: "flex",
      justifyContent: "space-between",
      width: "20%",
    },
  });

  const classes = useStyles();

  const efectuarCompra = () => {
    props.history.push("/MetodoDePago");
  };
  const storeProductos = useSelector((state) => state.carrito.productos);

  const mostrarTotal = () => {
    let total = "";
    let totalPrecio = 0;

    storeProductos.forEach((producto) => {
      totalPrecio = totalPrecio + producto.precio;
    });

    total = "$ " + totalPrecio.toString();
    return total;
  };

  useEffect(() => {
    getProductos();
  }, []);
  const dispatch = useDispatch();
  const getProductos = async () => {
    await dispatch(carritoActions.setCarrito());
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item sm={12} md={6} lg={6} xl={6}>
            <Card className={classes.compras} variant="outlined">
              <CardContent>
                {storeProductos.map((producto) => {
                  return (
                    <Fragment key={producto.id}>
                      <CardCompras producto={producto} />
                    </Fragment>
                  );
                })}
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={12} md={6} lg={6} xl={6}>
            <Card className={classes.resumen} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Resumen
                </Typography>
                <div className={classes.compra}>
                  <Typography>Total</Typography>
                  <Typography>{mostrarTotal()}</Typography>
                </div>
              </CardContent>
              <CardActions>
                <Button onClick={efectuarCompra} size="small">
                  Comprar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Compras;
