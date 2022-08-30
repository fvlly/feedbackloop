import { FETCH_USER, } from "./types";
import axios from "axios";

export const fetchUser = () => async (dispatch) => {
  try {
    const user = await axios.get("/api/current_user");

    dispatch({ type: FETCH_USER, payload: user.data });
  } catch (error) {
    log(error.message);
  }
};


export const handleToken =(token) =>async (dispatch) =>{
   try {
    const res = await axios.post('/api/stripe',token)

    dispatch({type:FETCH_USER,payload: res.data})
   } catch (error) {
    console.log(error.message);
   }
}

export const submitSurvey = (values,history) => async (dispatch) => {
 
  const res = await axios.post('/api/surveys',values)

  history.push('/surveys')
  dispatch({ type : FETCH_USER, payload:res.data})
}
