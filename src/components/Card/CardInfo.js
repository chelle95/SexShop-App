import React from "react";
import { CardContent, Card, CardMedia } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const CardInfo = ({ imagen, ancho, largo, pagina, history }) => {
  const useStyles = makeStyles({
    cardImagen: {
      width: ancho,
      height: largo,
    },
    cardUno: {
      backgroundRepeat: "no-repeat",
      width: ancho,
      height: largo,
    },
    root: {
      padding: 0,
    },
  });

  const styleClass = useStyles();
  const cambiarPagina = () => {
    history.push(`/${pagina}`);
  };
  return (
    <Card onClick={cambiarPagina} elevation={10} className={styleClass.cardUno}>
      <CardContent classes={{ root: styleClass.root }}>
        <CardMedia className={styleClass.cardImagen} image={imagen} />
      </CardContent>
    </Card>
  );
};

export default withRouter(CardInfo);
