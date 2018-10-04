import React, {Component} from 'react';

import Header from './component/Header';
import GameBoard from './component/GameBoard';
import Footer from './component/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container pt-3">
                    <GameBoard/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
