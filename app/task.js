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
        let inlineStyle = {
            color: '#ee9900'
        };

        return (
            <li className="checkList-task">
                <input
                    type="checkbox"
                    defaultChecked={this.props.done}
                    onChange={this.handleChange}
                />
                <span style={inlineStyle}>
                    {this.props.name}
                </span>

                <a href="#" className="checklist-task-remove" onClick={this.handleClick}/>
            </li>
        );
    }
}

export default Task;