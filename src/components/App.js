import React from 'react';
import Header from './Header';
import Search from './Search';
import Thumbnails from './Thumbnails';


class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Header />
                </div>
                <div className="row">
                    <Search />
                </div>
            </div>
        );
    }
}
export default App;

