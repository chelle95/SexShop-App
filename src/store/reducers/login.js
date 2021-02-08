import { INICIAR_SESION, LOGIN, CERRAR_SESION } from "../actions/login";

const initialState = {
  logueado: false,
  email: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INICIAR_SESION:
      return {
        ...state,
        logueado: action.logueado,
        email: action.email,
      };
    case LOGIN:
      return {
        ...state,
        email: action.email,
        logueado: action.logueado,
      };
    case CERRAR_SESION:
      return {
        ...state,
        logueado: false,
        email: "",
      };
    default:
      return state;
  }
};
