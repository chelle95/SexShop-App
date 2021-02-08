import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import * as loginActions from "../store/actions/login";
import { useDispatch } from "react-redux";

const Registrarse = (props) => {
  const useStyles = makeStyles({
    container: {
      marginTop: "150px",
    },
    boton: {
      marginTop: "50px",
    },
    containerBoton: {
      display: "grid",
      placeItems: "center",
    },
  });

  const dispatch = useDispatch();

  const registrarse = () => {
    dispatch(loginActions.registrar(values));
    props.history.push("/");
  };

  //useState(dentro esta lo que se inicializa)
  const [date, setDate] = useState(new Date());

  const handleDateChange = (fecha) => {
    setDate(fecha);
  };

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    direccion: "",
    localidad: "",
    codigoPostal: "",
    telefono: "",
    email: "",
    confirmarEmail: "",
    password: "",
    confirmarPassword: "",
    showPassword: false,
  });

  const handleChange = (prop, event) => {
    //event.target.value toma lo que escribis en el momento
    // values["nombre"] = values.nombre
    setValues({ ...values, [prop]: event.target.value });
  };

  const classes = useStyles();

  return (
    <Container>
      <div className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <TextField
              value={values.nombre}
              id="standard-full-width"
              label="Nombre"
              fullWidth
              onChange={(e) => handleChange("nombre", e)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <TextField
              value={values.apellido}
              label="Apellido"
              id="margin-none"
              fullWidth
              onChange={(e) => handleChange("apellido", e)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <TextField
              value={values.dni}
              label="DNI"
              id="margin-none"
              fullWidth
              onChange={(e) => handleChange("dni", e)}
              type="number"
            />
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <TextField
              value={values.direccion}
              id="standard-full-width"
              label="Direccion"
              fullWidth
              onChange={(e) => handleChange("direccion", e)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <TextField
              value={values.localidad}
              label="Localidad"
              id="margin-none"
              fullWidth
              onChange={(e) => handleChange("localidad", e)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <TextField
              value={values.codigoPostal}
              label="Codigo Postal"
              id="margin-none"
              fullWidth
              onChange={(e) => handleChange("codigoPostal", e)}
              type="number"
            />
          </Grid>
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <KeyboardDatePicker
                fullWidth
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <TextField
                value={values.telefono}
                label="Telefono"
                id="margin-none"
                fullWidth
                onChange={(e) => handleChange("telefono", e)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <TextField
                value={values.email}
                label="Email"
                id="margin-none"
                fullWidth
                onChange={(e) => handleChange("email", e)}
                type="text"
              />
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <TextField
              value={values.confirmarEmail}
              label="Confirmar Email"
              id="margin-none"
              fullWidth
              onChange={(e) => handleChange("confirmarEmail", e)}
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <TextField
              type={"password"}
              value={values.contraseña}
              label="Contraseña"
              id="margin-none"
              fullWidth
              onChange={(e) => handleChange("password", e)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <TextField
              type={"password"}
              value={values.confirmarContraseña}
              label="Confirmar Contraseña"
              id="margin-none"
              fullWidth
              onChange={(e) => handleChange("confirmarPassword", e)}
            />
          </Grid>
        </Grid>

        <Grid container className={classes.containerBoton}>
          <Grid item>
            <Button
              className={classes.boton}
              variant="contained"
              color="primary"
              onClick={registrarse}
            >
              Registrarse
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Registrarse;
