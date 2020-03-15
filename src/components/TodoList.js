// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = (props) => {
    return (
        <div className='list-container'>
            {props.TodoList.map(todo => (
                <Todo 
                    key={todo.id}
                    task={todo}
                    toggleCompleted={props.toggleCompleted}
                />)
            )}
        {/* <button className='completed-button' onClick={props.clearCompleted}>
            Tasks Completed
        </button> */}
        </div>
    );
}

export default TodoList;