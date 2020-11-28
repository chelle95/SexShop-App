import React from "react";
import Footer from "../Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import { Container, Grid } from "@material-ui/core";
import CardInfo from "../components/Card/CardInfo";
import boo from "../images/boo.jpg";
import baa from "../images/baa.jpg";
import DivisionUno from "../components/Divisiones/DivisionUno";
const Principal = () => {
  return (
    <div>
      <Carousel className="carousel-info" />
      <Container>
        <Grid container className="containerInfo">
          <CardInfo pagina={"paraEllas"} imagen={boo} ancho={500} largo={200} />
          <CardInfo pagina={"paraEllos"} imagen={baa} ancho={500} largo={200} />
        </Grid>
        <DivisionUno />
        <Grid container className="containerTendencia">
          <CardInfo imagen={boo} ancho={300} largo={300} />
          <CardInfo imagen={baa} ancho={400} largo={300} />
          <CardInfo imagen={boo} ancho={300} largo={300} />
        </Grid>
        <Footer />
      </Container>
    </div>
  );
};

export default Principal;
