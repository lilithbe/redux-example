import {
    TODO_LOADING,
    TODO_UPDATE,
    TODO_FAIL,
  } from './Types'

  const initialState={
      isLoding:false,
      failData:null,
      list:[],
  }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case TODO_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        }
      case TODO_UPDATE:
        return {
          ...state,
          ...action.payload,
        }
      case TODO_FAIL:
        return {
          ...state,
          failData: action.payload,
        }
  
      default: return state
    }
  }
  
  export default reducer