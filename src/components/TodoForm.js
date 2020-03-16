import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: ""
        };
    }

    handleChanges = event => {
        this.setState({ taskName: event.target.value });
    };

    handleAddTodo = event => {
        event.preventDefault();
        this.props.addTodo(this.state.taskName);
    };

    render() {
        return (
            <form onSubmit={this.handleAddTodo}>
                <input
                    type="text"
                    name="todo"
                    value={this.state.taskName}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm