import React, {Component} from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
    }

    handleChange() {
    }

    handleClick() {
    }

    render() {
        return (
            <li className="checkList-task">
                <input
                    type="checkbox"
                    defaultChecked={this.props.done}
                    onChange={this.handleChange}
                />
                {this.props.name}
                <a href="#" className="checklist-task-remove" onClick={this.handleClick}/>
            </li>
        );
    }
}

export default Task;