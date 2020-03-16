import React from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

const tasks = [
  {
    task: 'mow the lawn',
    id: 901,
    complete: false
  },
  {
    task: 'take out recycling',
    id: 902,
    complete: false
  },
  {
    task: 'do laundry',
    id: 903,
    complete: false
  }
];

console.log(tasks);

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
  }


  toggleCompleted = todoId => {
    console.log('App: Toggle Completed')
    this.setState({
      tasks: this.state.tasks.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            complete: !todo.complete
          };
        }
        return todo;
      })
    });
  };


  clearTodo = () => {
    console.log("This has been completed");
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return task.complete;
      })
    });
  };
  

  addTodo = taskName => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          name: taskName,
          complete: false,
          id: (Math.random() * Math.random()).toString(9).substr(2, 9)
        }
      ]
    });
  };


  render() {
    return (
      <div className='app-container'>
        <div className='header'>
          <h2>Tasks for the day!</h2>
          <TodoForm />
        </div>
          <TodoList 
            tasks={this.state.tasks}
            toggleCompleted={this.toggleCompleted}
            // clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;
