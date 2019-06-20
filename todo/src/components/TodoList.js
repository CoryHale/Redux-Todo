import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            this.props.todosOnProps.map(todo => (
                <Todo todo={todo} />
            ))
        )
    }
};

const mapStateToProps = state => {
    console.log("TodoList.js: mapStateToProps: state ", state);
    return {
        todosOnProps: state.todos
    }
}

export default connect(
    mapStateToProps,
    {}
)(TodoList);