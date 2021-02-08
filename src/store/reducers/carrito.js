import { AGREGAR, ELIMINAR_CARRITO, SET_CARRITO } from "../actions/carrito";

const initialState = {
  productos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR:
      return {
        ...state,
        productos: state.productos.concat(action.producto),
      };
    case SET_CARRITO:
      return {
        productos: action.productos,
      };
    case ELIMINAR_CARRITO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== action.idProducto
        ),
      };
    default:
      return state;
  }
};
