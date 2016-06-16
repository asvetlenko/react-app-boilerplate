import React, {Component} from 'react';
import Task from './task';

class CheckList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var tasks = this.props.tasks.map((task) => (
            <Task key={task.id}
                       name={task.name}
                       done={task.done}
            />
        ));
        return (
            <ul className="checkList">
                {tasks}
            </ul>
        );
    }
}

export default CheckList;