/*rafce*/

import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  const useStyles = makeStyles({
    listas: {
      listStyleType: "none",
      padding: "2%",
    },
    listUnstyled: {
      padding: "10%",
      textAlign: "center",
    },
  });

  const classes = useStyles();
  return (
    <div className="footer">
      <Grid container>
        <Grid item lg={4} className={classes.listUnstyled}>
          <Typography variant="h6">Quienes Somos</Typography>
          <ul className={classes.listas}>
            <li>342-420-6969</li>
            <li>CABA</li>
            <li>123 Holitas Street</li>
          </ul>
        </Grid>

        <Grid item lg={4} className={classes.listUnstyled}>
          <Typography variant="h6">Conocenos</Typography>
          <ul className={classes.listas}>
            <li>342-420-6969</li>
            <li>CABA</li>
            <li>123 Holitas Street</li>
          </ul>
        </Grid>

        <Grid item lg={4} className={classes.listUnstyled}>
          <Typography variant="h6">Metodos de pago</Typography>
          <ul className={classes.listas}>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </ul>
        </Grid>
      </Grid>

      <Grid container>
        <p>&copy; pagina realizada por x </p>
      </Grid>
    </div>
  );
};

export default Footer;
