import {
    TODO_LOADING,

    TODO_UPDATE,
    TODO_FAIL,
  } from './Types'
  
  
  
  export const setTodo = (data) => {
    return (dispatch) => {
      try {
        dispatch(todoLoading(true))
        dispatch(todoUpdate(data))
        dispatch(todoLoading(false))
      } catch (error) {
        dispatch(todoLoading(false))
        dispatch(todoFail(error))
      }
    }
  }
  
  export const todoLoading = (data) => {
    return {
      type: TODO_LOADING,
      payload: data,
    }
  }
  export const todoUpdate = (data) => {
    return {
      type: TODO_UPDATE,
      payload: data,
    }
  }
  export const todoFail = (data) => {
    return {
      type:TODO_FAIL,
      payload: data,
    }
  }
  
  