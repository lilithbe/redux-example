import React, { useEffect , useState} from 'react'
import {connect} from 'react-redux'
import Create from './components/todos/Create'
import List from './components/todos/List'
import { setTodo } from './redux/todos/Actions'
const App = ({todo,setTodo}) => {





  
  
  return (
    <div>
      <h1>My Todos</h1>
      <Create />
      <List />
    </div>
  )
}


const mapStateToProps = (state)=>{
return {
  todo:state.as.list
}
}
const mapDispatchToProps = (dispatch)=>{
return {
  setTodo:(data)=>dispatch(setTodo(data))
}
}
export default connect(mapStateToProps,mapDispatchToProps)(App)