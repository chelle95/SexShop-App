import { AirlineSeatIndividualSuiteRounded } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import Deslogueado from "../Vistas/MetodoDePago/Deslogueado";
import Logueado from "../Vistas/MetodoDePago/Logueado";

const MetodoDePago = () => {
  //para ir a buscar a buscar datos necesitamos el useSelector
  const logueado = useSelector((state) => state.login.logueado);

  const tipoDeVista = () => {
    if (logueado) {
      return <Logueado />;
    } else {
      return <Deslogueado />;
    }
  };

  return (
    <div>
      {/* cuando esta registrado ver cual es el metodo de pago , datos de la tarjeta */}
      {/*cuando no esta registrado tomar los datos */}
      {tipoDeVista()}
    </div>
  );
};

export default MetodoDePago;
