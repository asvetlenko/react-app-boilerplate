import React, {Component} from 'react';
import CheckList from './check-list';
import marked from 'marked';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        };
    }

    toggleDetails() {
        this.setState({showDetails: !this.state.showDetails});
    }

    render() {
        let cardDetails;
        if (this.state.showDetails) {
            let description = {
                __html: marked(this.props.description)
            };

            cardDetails = (
                <aside className="card-details">
                    <span dangerouslySetInnerHTML={description}/>
                    <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
                </aside>
            );
        }

        let headerClassName = 'card-title';
        if (this.state.showDetails) {
            headerClassName += ' card-title-is-open';
        }

        return (
            <article className="card">
                <header onClick={this.toggleDetails.bind(this)}>
                    <h2 className={headerClassName}>
                        {this.props.title}
                    </h2>
                </header>
                {cardDetails}
            </article>
        );
    }
}

export default Card;