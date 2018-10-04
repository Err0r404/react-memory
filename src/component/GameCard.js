import React from 'react';
import { Card, CardBody, Fa } from 'mdbreact';

class GameCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tail: "question-circle-o",
            face: props.face,
            current: "question-circle-o",
            locked: false,
        };
    }

    selected(){
        // Inform board which card as been selected
        if(this.state.current === this.state.tail)
            this.props.informBoard(this);
    }

    flip(){
        let face = this.state.face;
        this.setState({current: face});
    }

    flipBack(){
        let tail = this.state.tail;
        this.setState({current: tail});
    }

    lock(){
        this.setState({locked: true});
    }

    render(){
        return (
            <Card>
                <CardBody className={this.state.locked === true ? 'text-warning' : ''}>
                    <Fa icon={this.state.current} size='5x' onClick={() => this.selected()}/>
                </CardBody>
            </Card>
        )
    }
}

export default GameCard;