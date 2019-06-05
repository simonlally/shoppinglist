import React from 'react';
import Items from './Items';
import './Items.css';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem(event) {
        if (this.inputElement.value !== "") {
            var newItem = {
                text: this.inputElement.value,
                key: Date.now()
            };

            this.setState((prevState)=> {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this.inputElement.value = "";
        }
        console.log(this.state.items);
        event.preventDefault();
    }

    render() {
        return (
            <div className="ListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(e) => this.inputElement = e} placeholder="enter item"></input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <Items entries={this.state.items}/>
            </div>
        );
    }
}

export default Add;