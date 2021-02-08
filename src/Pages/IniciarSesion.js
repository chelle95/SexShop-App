import {
  Container,
  Grid,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as loginActions from "../store/actions/login";

const IniciarSesion = (props) => {
  const useStyles = makeStyles({
    iniciarSesion: {
      display: "grid",
      placeItems: "center",
      width: "100%",
      height: "100%",
    },
  });

  const miStorage = window.localStorage;

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (prop, event) => {
    //event.target.value toma lo que escribis en el momento
    // values["nombre"] = values.nombre
    setValues({ ...values, [prop]: event.target.value });
  };

  //PARA EJECUTAR LA ACCION
  const dispatch = useDispatch();

  const storeLogin = useSelector((store) => store.login.logueado);
  const storeEmail = useSelector((store) => store.login.email);

  const handleSubmit = async () => {
    await dispatch(loginActions.iniciarSesion(values.email, values.pass));
  };

  useEffect(() => {
    if (storeLogin) {
      miStorage.setItem("Logueado", storeLogin);
      miStorage.setItem("Email", storeEmail);
      props.history.push("/");
    }
  }, [storeLogin]);

  const classes = useStyles();
  return (
    <div className={classes.iniciarSesion}>
      <Container maxWidth="xs">
        <Grid container>
          <Grid item md={12}>
            <TextField
              value={values.email}
              id="standard-full-width"
              label="Email"
              fullWidth
              onChange={(e) => handleChange("email", e)}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
            <TextField
              type={"password"}
              value={values.pass}
              id="standard-full-width"
              label="Contraseña"
              fullWidth
              onChange={(e) => handleChange("pass", e)}
            />
          </Grid>
        </Grid>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.botonI}
            onClick={handleSubmit}
          >
            Iniciar Sesion
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default IniciarSesion;
