import React from 'react';
import {render} from 'react-dom';
import TransportationComponent from './TransportationComponent.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <TransportationComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
