//siempre que tengamos que hacer conexion con la base de datos pasamos por ACTIONS
export const AGREGAR = "AGREGAR";
export const SET_CARRITO = "SET_CARRITO";
export const ELIMINAR_CARRITO = "ELIMINAR_CARRITO";
export const EFECTUAR_COMPRA = "EFECTUAR_COMPRA";

export const agregarCarrito = (id, producto) => {
  return async (dispatch) => {
    const { nombre, descripcion, precio, imagen } = producto;
    const data = {
      id,
      nombre,
      descripcion,
      precio,
      imagen,
    };
    try {
      const response = await fetch("http://localhost:3004/carrito", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await response.json();
      dispatch({ type: AGREGAR, producto: resData });
    } catch (e) {
      console.log(e);
    }
  };
};

export const setCarrito = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3004/carrito");
    //response.json extrae la informacion que nos sirve de response, la que necesitamos.
    const resData = await response.json();
    dispatch({
      type: SET_CARRITO,
      productos: resData,
    });
  };
};

export const eliminarCarrito = (id) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3004/carrito/${id}`, {
      method: `DELETE`,
    });
    if (response.status === 200) {
      dispatch({ type: ELIMINAR_CARRITO, idProducto: id });
    }
  };
};

export const efectuarCompra = () => {
  return async (dispatch) => {};
};
