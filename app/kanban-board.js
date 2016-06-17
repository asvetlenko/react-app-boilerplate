import React, {Component} from 'react';
import List from './list';
import Search from './search';
import jquery from 'jquery';

class KanbanBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            searchTerm:'React js'
        };
    }

    componentDidMount () {
        jquery.ajax({
            url: '/data-model.json',
            dataType: 'json',
            cache: false,
            success: (data) => {
                this.setState({cards: data});
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
                this.setState({cards: []});
            }
        });
    }

    getListItems() {
        return this.props.layout.map((layoutItem) => {
            let cards = this.props.cards.filter((card) => card.status === layoutItem.id);
            return (
                <List
                    key={layoutItem.id}
                    id={layoutItem.id}
                    title={layoutItem.title}
                    cards={cards}
                />
            );
        });
    }

    render() {
        var listItems = this.getListItems();

        return (
            <main className="app">
                {Search}
                {listItems}
            </main>
        );
    }
}

export default KanbanBoard;