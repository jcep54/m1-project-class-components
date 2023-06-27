import React from 'react'
import Form from './Form'
import TodoList from './TodoList';



export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: [
       
      ]
    }
  }

  handleComplete = (id) =>{

    this.setState({
      ...this.state,
      tasks: this.state.tasks.map(task =>{
      if(task.id === id){
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task;
    })
  })
  }

  addItem = (item) =>{
    
    const newTask = {
      name:item,
      id: Date.now(),
      completed: false,
    }
    this.setState({...this.state,tasks:[...this.state.tasks, newTask]})
    console.log(this.state.tasks)
  }
  handleClear = () =>{
    //1 set state
    // 2 loop thorugh todos
    //3 remove all todos tha have completed === true
    //4 save filtered todos to state
    this.setState({
      ...this.state,
      tasks:
    this.state.tasks.filter(task =>{
     return (task.completed=== false)
    })})
  }

  render() {
    const {tasks} = this.state;
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList tasks={tasks}  complete={this.handleComplete}/>
        <Form submit={this.addItem}/>
        <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    )
  }
}
