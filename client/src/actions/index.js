import { FETCH_USER,FETCH_SURVEYS,DELETE_SURVEY } from "./types";
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

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get('/api/surveys')

 dispatch({type:FETCH_SURVEYS,payload: res.data})
}

export const deleteSurvey = (id) => async (dispatch) => {
  await axios.delete(`/api/surveys/${id}`)

  dispatch({type:DELETE_SURVEY,payload:id})
}
