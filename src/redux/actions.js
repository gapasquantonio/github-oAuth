import axios from "axios";
import { SEARCH_USER, SET_USER,SET_REPO, SET_STARRED,SET_USER_DETAIL,SET_USER_LOGOUT } from "./actionsNames";

export function searchUser(data) {

  return (dispatch) => {
    axios
      .get(`https://api.github.com/users/${data}`)
      .then((response) => {
     
        dispatch({ type: SEARCH_USER, payload: response.data });
        dispatch({ type: SET_USER, payload: true });
      })
      .catch((error) => {
        if (error.response?.status !== 404) alert("Something is wrong 😅");
        dispatch({ type: SET_USER, payload: false });
      });
  };
}

export function getRepo(data) {
  
    return (dispatch) => {
      axios
        .get(`https://api.github.com/users/${data}/repos`)
        .then((response) => {
         
          dispatch({ type: SET_REPO, payload: response.data });
        })
        .catch((error) => {
          if (error.response?.status !== 404) alert("Something is wrong 😅");
          dispatch({ type: SET_REPO, payload: false });
        });
    };
  }
  export function getStarred(data) {
    
    return (dispatch) => {
      axios
        .get(`https://api.github.com/users/${data}/starred`)
        .then((response) => {
        
          dispatch({ type: SET_STARRED, payload: response.data });
        })
        .catch((error) => {
          if (error.response?.status !== 404) alert("Something is wrong 😅");
          dispatch({ type: SET_STARRED, payload: false });
        });
    };
  }
  export function setUserLoginDetails(data) {
    
    return {
      type: SET_USER_DETAIL,
      payload:{
        name:data.displayName,
        photo:data.photoURL,
        email:data.email
      } 
    };
  }
  export function setSignOutState() {
   
    return {
      type: SET_USER_LOGOUT,
      payload:{
        name:null,
        photo:null,
        email:null
      } 
    };
  }
  export function clearUser() {
    console.log("action applied")
    return {
      type: SEARCH_USER,
      payload: "",
    };
  }
  