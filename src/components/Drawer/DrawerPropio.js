import React, { useState } from "react";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core/";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import logoSexy from "../../images/logoSexy.jpg";

import { makeStyles } from "@material-ui/core/styles";

const DrawerPropio = (props) => {
  const useStyles = makeStyles({
    drawerProp: {
      width: 300,
    },
    imagen: {
      margin: "20px",
      width: 250,
      height: 200,
    },
    productos: {
      fontFamily: "Roboto",
      textAlign: "center",
    },
  });

  const classes = useStyles();

  const toggleDrawer = () => {
    props.setShowDrawer(false);
  };

  const [values, setValues] = useState({
    lenceria: false,
    ofertas: false,
    juguetes: false,
    geles: false,
    profilacticos: false,
    disfraces: false,
  });

  const handleClick = (prop) => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  return (
    <div>
      <Drawer
        classes={{ paper: classes.drawerProp }}
        anchor="left"
        open={props.showDrawer}
        onClose={toggleDrawer}
      >
        <img src={logoSexy} className={classes.imagen} alt="logoSexy" />
        <Typography variant="h5" className={classes.productos}>
          Productos
        </Typography>
        <List className={classes.listItem}>
          {/*cuando necesitamos que no se inicie al actualizarme escribimos delante una funcion anonima asi, lo hara despues del click*/}
          <ListItem button onClick={() => handleClick("lenceria")}>
            <ListItemText primary="Lenceria"></ListItemText>
            {values.lenceria ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.lenceria} timeout="auto" unmountOnExit>
            <List>
              <ListItem className={classes.seccionUno}>
                <ListItemText primary="holis" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleClick("ofertas")}>
            <ListItemText primary="Ofertas"></ListItemText>
            {values.ofertas ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.ofertas} timeout="auto" unmountOnExit>
            <List>
              <ListItem className={classes.seccionUno}>
                <ListItemText primary="holis" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleClick("juguetes")}>
            <ListItemText primary="Juguetes"></ListItemText>
            {values.juguetes ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={values.juguetes} timeout="auto" unmountOnExit>
            <List>
              <ListItem className={classes.seccionUno}>
                <ListItemText primary="holis" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerPropio;
