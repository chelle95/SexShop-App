export const REGISTRAR = "REGISTRAR";
export const INICIAR_SESION = "INICIAR_SESION";
export const LOGIN = "LOGIN";
export const CERRAR_SESION = "CERRAR_SESION";

export const registrar = (usuario) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3004/Usuarios", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const resData = await response.json();
    console.log(resData);
  };
};

export const iniciarSesion = (email, pass) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3004/Usuarios");
    const resData = await response.json();
    resData.forEach((element) => {
      if (element.email === email) {
        if (element.password === pass) {
          dispatch({ type: INICIAR_SESION, email, logueado: true });
        }
      }
    });
  };
};

export const setearSesion = (logueado, email) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN, email, logueado });
  };
};

export const cerrarSesion = () => {
  return async (dispatch) => {
    dispatch({ type: CERRAR_SESION });
  };
};
