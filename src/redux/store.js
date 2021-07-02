import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SEARCH_USER, SET_USER, SET_REPO, SET_STARRED,SET_USER_DETAIL,SET_USER_LOGOUT } from "./actionsNames";

const initialState = {
  githubUser: "",
  found: true,
  repo: undefined,
  starred: undefined,
  name:undefined,
  photo:undefined,
  email:undefined
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_USER: {
      return { ...state, githubUser: action.payload };
    }
    case SET_USER: {
      return { ...state, found: action.payload };
    }
    case SET_REPO: {
      return { ...state, repo: action.payload };
    }
    case SET_STARRED: {
      return { ...state, starred: action.payload };
    }
    case SET_USER_DETAIL: {
      return { ...state, name: action.payload.name,photo: action.payload.photo,email: action.payload.email };
    }
    case SET_USER_LOGOUT: {
      return { ...state, name: action.payload.name,photo: action.payload.photo,email: action.payload.email };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
