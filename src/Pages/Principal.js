import React from "react";

import { Container, Grid } from "@material-ui/core";

import Footer from "../Footer/Footer";

import Carousel from "../components/Carousel/Carousel";
import CardInfo from "../components/Card/CardInfo";
import DivisionUno from "../components/Divisiones/DivisionUno";

import erotic from "../images/erotic.jpg";
import sex from "../images/sex.jpg";
import toys from "../images/toys.jpg";

const Principal = () => {
  return (
    <div>
      <Carousel className="carousel-info" imagenes={erotic} />
      <Container>
        <Grid container className="containerInfo">
          <CardInfo pagina={"paraEllas"} imagen={sex} ancho={500} largo={200} />
          <CardInfo
            pagina={"paraEllos"}
            imagen={toys}
            ancho={500}
            largo={200}
          />
        </Grid>
        <DivisionUno />
        <Grid container className="containerTendencia">
          <CardInfo imagen={sex} ancho={300} largo={300} />
          <CardInfo imagen={toys} ancho={400} largo={300} />
          <CardInfo imagen={sex} ancho={300} largo={300} />
        </Grid>
        <Footer />
      </Container>
    </div>
  );
};

export default Principal;
