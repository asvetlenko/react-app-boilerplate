import React, {Component} from 'react';
import {render} from 'react-dom';
import KanbanBoard from './kanban-board';

let cardsList = [
    {
        "id": 1,
        "title": "Card one title",
        "description": "Card detailed description.",
        "status": "todo",
        "tasks": [
            {
                "id": 1,
                "name": "Task one",
                "done": true
            },
            {
                "id": 2,
                "name": "Task two",
                "done": false
            },
            {
                "id": 3,
                "name": "Task three",
                "done": false
            }
        ]
    },
    {
        "id": 2,
        "title": "Card Two title",
        "description": "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
        "status": "in-progress",
        "tasks": [
            {"id": 1, "name": "ContactList Example", "done": true},
            {"id": 2, "name": "Kanban Example", "done": false},
            {"id": 3, "name": "My own experiments", "done": false}
        ]
    },
    {
        "id": 3,
        "title": "Card Three title",
        "description": "Card detailed description",
        "status": "done",
        "tasks": []
    }
];

let layoutForLists = [
    {
        "id": "todo",
        "title": "To Do"
    },
    {
        "id": "in-progress",
        "title": "In Progress"
    },
    {
        "id": "done",
        "title": "Done"
    }
];


render(<KanbanBoard cards={cardsList} layout={layoutForLists}/>, document.getElementById('root'));
