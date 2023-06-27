import React from 'react'


export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: '',
    }
  }
  

  inputChange = e =>{
    e.preventDefault();
    this.setState({...this.state, item: e.target.value});
    
  }
  submitForm = e =>{
    e.preventDefault();
    this.props.submit(this.state.item);
    this.setState({...this.state, item: ''});
  }
  render() {
    return (
      <div>
          <form onSubmit={this.submitForm}>
            <label> New Task:
              <input
                name='task'
                value={this.state.item}
                onChange={this.inputChange}
              />
            </label>
            <button>Add</button>
          </form>
          
      </div>
    )
  }
}
