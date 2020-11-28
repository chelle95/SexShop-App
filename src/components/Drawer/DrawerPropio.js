import React from "react";
import { Drawer, Typography } from "@material-ui/core/";
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
        <ul>
          <li>holi</li>
          <li>que ondis</li>
          <li>todo bien?</li>
        </ul>
      </Drawer>
    </div>
  );
};

export default DrawerPropio;
