import { ApiGeneralGet, ApiGeneralPost } from "../../API/Api";

//siempre que tengamos que hacer conexion con la base de datos pasamos por ACTIONS
export const AGREGAR = "AGREGAR";
export const SET_CARRITO = "SET_CARRITO";
export const ELIMINAR_CARRITO = "ELIMINAR_CARRITO";
export const EFECTUAR_COMPRA = "EFECTUAR_COMPRA";

export const agregarCarrito = (id, producto) => {
  return async (dispatch, getState) => {
    const email = getState().login.email;
    const { nombre, descripcion, precio, imagen } = producto;
    const data = {
      id,
      nombre,
      descripcion,
      precio,
      imagen,
      email,
    };
    try {
      const response = await ApiGeneralPost(data, "/agregarCarrito");
      const resData = await response.json();
      dispatch({ type: AGREGAR, producto: resData });
    } catch (e) {
      console.log(e);
    }
  };
};

export const setCarrito = () => {
  return async (dispatch, getState) => {
    const email = getState().login.email;
    const response = await ApiGeneralGet({ email }, "/setCarrito");
    //response.json extrae la informacion que nos sirve de response, la que necesitamos.
    const resData = await response.json();
    dispatch({
      type: SET_CARRITO,
      productos: resData,
    });
  };
};

export const eliminarCarrito = (id) => {
  return async (dispatch, getState) => {
    const email = getState().login.email;
    const response = ApiGeneralPost({ id, email }, "/eliminarCarrito");
    if (response.status === 200) {
      dispatch({ type: ELIMINAR_CARRITO, idProducto: id });
    }
  };
};

export const efectuarCompra = () => {
  return async (dispatch) => {};
};
