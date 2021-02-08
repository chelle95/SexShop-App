import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import mortal from "../../images/mortal.png";

import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useDispatch, useSelector } from "react-redux";
import * as loginActions from "../../store/actions/login";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "#ab3838",
  },
  tooltipFont: {
    fontSize: "1rem",
  },
  tooltip: {
    marginLeft: "auto",
  },
  button: {
    display: "flex",
  },
  dragon: {
    width: "40px",
    height: "40px",
  },
  tabsHolder: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
  },
  //MuiTabsRoot: {},
});

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Navbar(props) {
  const [tabValue, setTabValue] = useState();
  const [accountMenu, setAccountMenu] = useState(false);
  const [newAnchor, setNewAnchor] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch();

  // importar dispatch
  // 2 - llamar a la accion.

  const salir = async () => {
    await dispatch(loginActions.cerrarSesion());
    localStorage.removeItem("Email");
    localStorage.removeItem("Logueado");
    props.history.push("/");
  };

  const switchPages = (value) => {
    switch (value) {
      case 0:
        props.history.push("/Productos");
        setTabValue(value);
        break;
      case 1:
        props.history.push("/Envios");
        setTabValue(value);
        break;
      case 2:
        props.history.push("/Contacto");
        setTabValue(value);
        break;
      case 3:
        props.history.push("/Lenceria");
        setTabValue(value);
        break;
      default:
        break;
    }
  };

  const handleChange = (e, value) => {
    switchPages(value);
  };

  const toggleDrawer = () => {
    props.setShowDrawer(true);
  };

  const handleThisClick = (event) => {
    setNewAnchor(event.currentTarget);
    setAccountMenu(true);
  };

  const handleClose = () => {
    setNewAnchor(null);
    setAccountMenu(false);
  };

  const storeLogin = useSelector((store) => store.login.logueado);

  const menuDeslogueado = () => (
    <>
      <MenuItem
        onClick={() => {
          handleClose();
          props.history.push("/Registrarse");
        }}
      >
        Registrarse
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          props.history.push("/IniciarSesion");
        }}
      >
        Iniciar sesion
      </MenuItem>
    </>
  );

  const menuLogueado = () => (
    <>
      <MenuItem>Perfil</MenuItem>
      <MenuItem>Configuracion</MenuItem>
      <MenuItem onClick={salir}>Salir</MenuItem>
    </>
  );

  return (
    <div>
      <ElevationScroll>
        <AppBar className={classes.root} position="fixed">
          <Toolbar>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <IconButton>
              <img
                src={mortal}
                className={classes.dragon}
                onClick={() => {
                  props.history.push("/");
                }}
              />
            </IconButton>
            <div className={classes.tabsHolder}>
              <Tabs
                className={classes.tabs}
                value={tabValue}
                onChange={handleChange}
              >
                <Tab label="Productos" />
                <Tab label="Envios" />
                <Tab label="Contacto" />
                <Tab label="Lenceria" />
              </Tabs>
            </div>

            <Tooltip
              className={classes.tooltip}
              classes={{ tooltip: classes.tooltipFont }}
              title="Tu cuenta"
            >
              <IconButton
                className={classes.button}
                onClick={handleThisClick}
                aria-controls="simple-menu"
                aria-haspopup="true"
              >
                <AccountCircleIcon className={classes.button} />
              </IconButton>
            </Tooltip>

            <Tooltip
              classes={{ tooltip: classes.tooltipFont }}
              title="Tus compras"
            >
              <IconButton
                onClick={() => {
                  //para cambiar paginas es esto, boluda.
                  props.history.push("/Compras");
                }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Menu
        id="simple-menu"
        anchorEl={newAnchor}
        keepMounted
        open={accountMenu}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {!storeLogin ? menuDeslogueado() : menuLogueado()}
      </Menu>
    </div>
  );
}

export default withRouter(Navbar);
