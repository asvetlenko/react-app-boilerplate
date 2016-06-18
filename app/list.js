import React, {Component} from 'react';
import Card from './Card';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var cards = this.props.cards.map((card) => (
            <Card key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  tasks={card.tasks}
                  color={card.color}
            />
        ));

        return (
            <section className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </section>
        );
    }
}

export default List;