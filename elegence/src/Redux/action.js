import axios from "axios";
import * as types from "./actionTypes";

const API_URL = "http://localhost:3000/Furniture";

const getDataRequest = () => {
  return {
    type: types.GET_DATA_REQUEST, // isLoading : true
  };
};

const getDataSuccess = (payload) => {
  return {
    type: types.GET_DATA_SUCCESS,
    payload,
  };
};

const getDataError = () => {
  return {
    type: types.GET_DATA_ERROR,
  };
};

const addDataRequest = () => {
  return {
    type: types.ADD_DATA_REQUEST,
  };
};

const addDataSuccess = (payload) => {
  return {
    type: types.ADD_DATA_SUCCESS,
    payload,
  };
};

const addDataError = () => {
  return {
    type: types.ADD_DATA_ERROR,
  };
};

const statusDataRequest = () => {
  return {
    type: types.STATUS_DATA_REQUEST,  
  };
};

const statusDataSuccess = (payload) => {
  return {
    type: types.STATUS_DATA_SUCCESS,
    payload,
  };
};

const statusDataError = () => {
  return {
    type: types.STATUS_DATA_ERROR,
  };
};

const postinCart =(payload)=>{
  return {
    type:types.POST_TO_CART,
    payload
  }
}
// ${API_URL}
const getData = (dispatch) => {
  console.log("getdata calling");
  dispatch(getDataRequest()); // isLoadig  -> true
  return axios
    .get(`${API_URL}`)
    .then((r) => dispatch(getDataSuccess(r.data))) // getDATA(payload)
    .catch((e) => {
      dispatch(getDataError());
    });
};

const addData = (payload) => (dispatch) => {   // middleware --> thunk
  if (payload) {
    const payloadObj = {
      title: payload,
      status: false,
    };
    dispatch(addDataRequest());  // isLoading : -- true
    return axios
      .post(`${API_URL}`, payloadObj)
      .then((r) => {
        dispatch(addDataSuccess());
      })
      .catch((e) => {
        dispatch(addDataError());
      });
  }
};



const statusData = ({ id, status }) => (dispatch) => {
    dispatch(statusDataRequest());
    return axios
      .patch(`${API_URL}/${id}`, { status: status })
      .then((r) => {
        dispatch(statusDataSuccess());
      })
      .catch((e) => {
        dispatch(statusDataError());
      });
  };

const deleteData = (id) => async (dispatch) => {
  // dispatch({ type: "delete_request" });
  return await axios
    .delete(`${API_URL}/${id}`)
    .then((r) => {
       getData()
      dispatch({ type: "delete_success" });
    })
    .catch((e) => {
      dispatch({ type: "delete_error" });
    });
};



export const updateData = (payload) => async (dispatch) => {
  const { id } = payload;
 
  dispatch({ type: types.UPDATE_DATA_REQUEST });

  try {
    
    const res = await axios.put(`${API_URL}/${id}`, payload);
    console.log(res);
    dispatch({ type: types.UPDATE_DATA_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: types.UPDATE_DATA_ERROR });
    console.log(
      "Error while calling updateData API at frontend ",
      error.message
    );
  }
};

export const postToCart=(payload)=>async(dispatch)=>{
   axios.post(`https://elegence-mock-server.onrender.com/api/Cart`,payload).then((res)=>(dispatch({type:types.POST_TO_CART,payload}))
  )
}



export { getData, addData, statusData, deleteData };
