import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from "../actions/index";
import "./Todo.css";

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleTodo = (e, index) => {
        console.log("toggle: ", index);
        this.props.toggleTodo(index)
    }

    render() {
        return (
            <div
                className={`task${this.props.completed ? " completed" : ""}`}
                onClick={() => this.toggleTodo(this.props.index)}
                key={this.props.index}>
                <p>{this.props.todo.value}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("Todo.js: mapStateToProps: state ", state);
    return {
        todosOnProps: state.todos
    }
}

export default connect(
    mapStateToProps,
    {toggleTodo}
)(Todo);