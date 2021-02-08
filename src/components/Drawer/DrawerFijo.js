import React, { useState } from "react";
//todo lo que se importa del core se puede compartir
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const DrawerFijo = () => {
  const useStyles = makeStyles({
    drawerFijo: {
      width: "250px",
      top: "64px",
      backgroundColor: "#e890d0",
    },
    listItem: {
      marginTop: "150px",
    },
    seccionUno: {
      paddingLeft: "50px",
    },
  });

  const classes = useStyles();
  //Nombre de la variable y a continuacion la funcion que cambia a la variable y despues de inicializa en X estado. (no es obligatorio inicializar)
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerFijo }}
        className={classes.drawerFijo}
      >
        <List className={classes.listItem}>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="florcita"></ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List>
              <ListItem className={classes.seccionUno}>
                <ListItemText primary="holis" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemText primary="florcita"></ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemText primary="florcita"></ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText primary="florcita"></ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerFijo;
