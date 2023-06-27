import React from 'react'

export default class Todo extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.completeTask(this.props.tasks.id)
  }
  render(){
    return(
      <li onClick={this.handleClick} >{this.props.tasks.name} {this.props.tasks.completed? <span>completed</span>:<span></span>}</li>
    )
  }
}
