import React from 'react';

import GameCard from './GameCard';
import Modal from './Modal';

class GameBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sample: [
                "html5",
                "css3",
                "github",
                "codepen",
                "android",
                "apple",
                "dropbox",
                "linux",
                "steam",
                "windows",
                "youtube",
                "twitter"
            ],
            firstPick: false,
            secondPick: false,
            pairFound: 0,
        };

        this.child = React.createRef();
    }

    shuffleArray(arr) {
        return arr
            .map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1]);
    }

    cardSelected(GameCard){
        if(false === this.state.firstPick){
            this.setState(
                { firstPick: GameCard },
                () => {
                    //console.log(`First card is ${GameCard.state.face}`);

                    GameCard.flip();
                }
            );
        }
        else if(false === this.state.secondPick){
            this.setState(
                { secondPick: GameCard },
                () => {
                    //console.log(`Second card is ${GameCard.state.face}`);

                    GameCard.flip();
                    this.comparePicks();
                }
            )
        }
        else{
            console.error("Previous pair has not been resolved");
        }
    }

    comparePicks(){
        let firstCard = this.state.firstPick;
        let secondCard = this.state.secondPick;

        if(firstCard.state.face === secondCard.state.face){
            let pairFound = this.state.pairFound + 1;

            // Lock on both cards
            this.setState(
                {firstPick : false, secondPick: false, pairFound},
                () => {
                    firstCard.lock();
                    secondCard.lock();
                }
            );

            // Modal in case of victory
            if(pairFound === this.state.sample.length)
                this.child.current.toggle();
        }
        else{
            // Flip back both card
            this.setState(
                {firstPick : false, secondPick: false},
                () => {
                    setTimeout(() => {
                        firstCard.flipBack();
                        secondCard.flipBack();
                    }, 1000);
                }
            )
        }
    }

    render() {
        // All cards must be per pairs
        let cards = this.state.sample.concat(this.state.sample);

        // Shuffle cards
        cards = this.shuffleArray(cards);

        return (
            <div>
                <div className="row">
                    {cards.map((card, index) => {
                        return (
                            <div key={index} className="col-4 col-md-2 my-3 text-center">
                                <GameCard face={card} informBoard={(param) => {this.cardSelected(param)}}/>
                            </div>
                        )
                    })}
                </div>

                <div className="row">
                    <div className="col">
                        <Modal ref={this.child}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameBoard;