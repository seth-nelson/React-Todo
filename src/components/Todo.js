import React from 'react';

const Todo = (props) => {
    return(
        <div
            className={`task${props.todo.completed ? ' completed' : ''} `}
            onClick={event => props.toggleCompleted(props.todo.task)}
        >
            <p>{props.todo.task}</p>
        </div>
    );
};

export default Todo;