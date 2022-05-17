import React from 'react'
import {connect} from 'react-redux'
const List = ({list}) => {
  return (
    <div>
        {list.map((item,i)=>{
            return(
                <div key={i}>{item.subject}{item.status}</div>
            )
        })}
        {list.length===0?'할일이 없어요':''}
    </div>
  )
}


const mapStateToProps = (state)=>{
return {
    list:state.as.list
}
}
const mapDispatchToProps = (dispatch)=>{
return {
}
}
export default connect(mapStateToProps,mapDispatchToProps)(List)