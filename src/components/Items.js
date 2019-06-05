import React from 'react';

class Items extends React.Component {

    createTasks(item) {
        return <li key={item.key}> {item.text} </li>
    }

    render() {
        var entries = this.props.entries;
        var items = entries.map(this.createTasks);

        return (
            <ul className="list">
                {items}
            </ul>
        )
    }

};

export default Items;