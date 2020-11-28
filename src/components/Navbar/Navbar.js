import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";

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

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1,
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
    debugger;
    setNewAnchor(event.currentTarget);
    setAccountMenu(true);
  };

  const handleClose = () => {
    setNewAnchor(null);
    setAccountMenu(false);
  };

  return (
    <div>
      <ElevationScroll>
        <AppBar className={classes.root} position="fixed">
          <Toolbar>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Tabs value={tabValue} onChange={handleChange}>
              <Tab label="Productos" />
              <Tab label="Envios" />
              <Tab label="Contacto" />
              <Tab label="Lenceria" />
            </Tabs>

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
                onClick={(e) => {
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default withRouter(Navbar);
