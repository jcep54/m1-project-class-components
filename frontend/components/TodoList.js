import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render(){
    return(
      <ul>{
        this.props.tasks.map(item =>{
          return (<Todo onClick={()=>{!this.props.tasks.completed}}tasks={item} key={item.id} completeTask={this.props.complete}/>)
        })
      }
      </ul>
    )
  }
}
