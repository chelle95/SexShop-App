import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";

import DrawerPropio from "./components/Drawer/DrawerPropio";

import Productos from "./Pages/Productos";
import Principal from "./Pages/Principal";
import ParaEllas from "./Pages/ParaEllas";
import ParaEllos from "./Pages/ParaEllos";
import Compras from "./Pages/Compras";
import Registrarse from "./Pages/Registrarse";
import MetodoDePago from "./Pages/MetodoDePago";
import IniciarSesion from "./Pages/IniciarSesion";

import { CssBaseline } from "@material-ui/core";

import { useDispatch } from "react-redux";

import * as loginActions from "./store/actions/login";

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  const miStorage = window.localStorage;
  const dispatch = useDispatch();

  const setearSesion = async () => {
    const logueado = miStorage.getItem("Logueado");
    const email = miStorage.getItem("Email");
    if (logueado) await dispatch(loginActions.setearSesion(logueado, email));
  };

  useEffect(() => {
    setearSesion();
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Navbar
        showDrawer={showDrawer}
        setShowDrawer={() => {
          setShowDrawer(true);
        }}
      />
      <DrawerPropio showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      <Route exact path="/" component={Principal} />
      <Route exact path="/Productos" component={Productos} />
      <Route exact path="/paraEllas" component={ParaEllas} />
      <Route exact path="/paraEllos" component={ParaEllos} />
      <Route exact path="/Compras" component={Compras} />
      <Route exact path="/Registrarse" component={Registrarse} />
      <Route exact path="/IniciarSesion" component={IniciarSesion} />
      <Route exact path="/MetodoDePago" component={MetodoDePago} />
    </div>
  );
}

export default App;
