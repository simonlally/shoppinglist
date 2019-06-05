import React from 'react';
import ReactDOM from 'react-dom';
import Add from './components/Add';

class App extends React.Component {

    render() {
        return (
            <div>
                <Add />
            </div>
        );
    }
}

ReactDOM.render( <App />, document.querySelector("#container"));