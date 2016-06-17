import React, {Component} from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event){
        console.log('Submitted values area. User name: ', event.target.userName.value,
            '; User Email: ', event.target.email.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>Search Form:
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label className="form-group">
                    Name:
                    <input name="userName" type="text"/>
                </label>
                <label className="form-group">
                    Name:
                    <input name="email" type="email"/>
                </label>
                <button type="submit">Submit</button>
            </form>
                </div>
        );
    }
}

export default SearchForm;