import Cart from "../VPages/Cart";
import * as types from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  Cart:[]
};

const reducer = (oldState = initialState, actionObj) => {
  const { type, payload } = actionObj;

  // console.log("working" , actionObj);

  switch (type) {
    case types.GET_DATA_REQUEST:
      return { ...oldState, isLoading: true };
    case types.GET_DATA_SUCCESS:
      return { ...oldState, isLoading: false, data: payload };
    case types.GET_DATA_ERROR:
      return { ...oldState, isLoading: false, isError: true };

    case types.ADD_DATA_REQUEST:
      return { ...oldState, isLoading: true };
    case types.ADD_DATA_SUCCESS:
      return { ...oldState, isLoading: false };
    case types.ADD_DATA_ERROR:
      return { ...oldState, isLoading: false, isError: true };
    case types.STATUS_DATA_REQUEST:
      return { ...oldState, isLoading: true };
    case types.STATUS_DATA_SUCCESS:
      return { ...oldState, isLoading: false };
    case types.STATUS_DATA_ERROR:
      return { ...oldState, isLoading: false, isError: true };
    case types.UPDATE_DATA_REQUEST:
      return { ...oldState, isLoading: true, isError: true };
    case types.UPDATE_DATA_SUCCESS:
      return { ...oldState, isLoading: false, isError: false };
    case types.UPDATE_DATA_ERROR:
      return { ...oldState, isLoading: false, isError: true };
      case types.POST_TO_CART:
      return {...oldState,Cart:[...Cart,payload]}
    default:
      return oldState; 
  }
};
export { reducer };

// PUT  - {id: 4, title: 'New Data', status: true} - replace
//const newData = oldState.todos.map(item => item.id === payload.id ? payload : item)

//DELETE - {id: 5}
//const newData = oldState.todos.filter(item => item.id !== payload.id)

//PATCH - {id: 3, title: 'New Title'}
//const newData = oldState.todos.map(item => item.id === payload.id ? {...item, payload} : item )