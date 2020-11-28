import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";

const Compras = () => {
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
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item sm={12} md={6} lg={6} xl={6}>
            <Card className={classes.compras} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  CARDDDD DE ROOOPAA! probando
                </Typography>
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
              </CardContent>
              <CardActions>
                <Button size="small">Comprar</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Compras;
