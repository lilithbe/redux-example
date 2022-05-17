import React, { useState } from 'react'
import {connect} from 'react-redux'
import { setTodo } from '../../redux/todos/Actions'
const Create = ({setTodo,todo}) => {
    const [todoState, setTodoState] = useState(
        {
            subject:'',
            status:false,
        }
    )
    const sandHandler = (e) => { 
        e.preventDefault()
        setTodoState({
            ...todoState,
            subject:e.target.value
        })
     }
  return (
    <div><input value={todoState.subject}   onChange={sandHandler}/><button onClick={(e)=>{setTodo({list:[...todo,todoState]})}}> sand</button></div>
  )
}

const mapStateToProps = (state) => {
    return {
        todo: state.as.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTodo: (data) => dispatch(setTodo(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Create)