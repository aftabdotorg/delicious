import { createContext, useContext, useReducer } from "react";

const initialState = [];

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          img: action.img,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
        },
      ];

    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;

    case "CLEAR":
      return [];

    default:
      console.log("Error in Reducer");
  }
};

export const useCartContext = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export default CartProvider;
