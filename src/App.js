import React from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

const todoTasks = [
  {
    task: 'mow the lawn',
    id: 901,
    complete: false,
  },
  {
    task: 'take out recycling',
    id: 902,
    complete: false,
  },
  {
    task: 'do laundry',
    id: 903,
    complete: false,
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoTasks
    };
  }


  toggleCompleted = todoId => {
    console.log('App: Toggle Completed')
    this.setState({
      todoTasks: this.state.todoTasks.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };
  

  render() {
    return (
      <div className='app-container'>
        <div className='header'>
          <h2>Tasks for the day!</h2>
          {/* <TodoForm /> */}
        </div>
          <TodoList 
            todos={this.state.todoTasks}
            toggleCompleted={this.toggleCompleted}
            // clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;
