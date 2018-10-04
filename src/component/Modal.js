import React from 'react';
import {Container, Button, Modal, ModalBody, Fa} from 'mdbreact';


class VictoryModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    render() {
        return (
            <Container>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>

                    <ModalBody className="text-center">
                        <p className="h1 font-weight-normal">Well done</p>

                        <Button color="warning" size="lg" className="mb-3" onClick={() => {window.location.reload()}}>
                            Want to play again?
                        </Button>

                        <p className="mb-5">Inspired by <a href="http://codepen.io/natewiley/full/HBrbL/" target="_blank" rel="noopener noreferrer">http://codepen.io/natewiley/full/HBrbL/</a></p>

                        <p className="lead mb-1">Thanks for sharing my work</p>

                        <Button size="sm" color="light-blue" href="https://twitter.com/intent/tweet?text=Nice+Memory+game+made+with+%23ReactJS+by+%40Schmittounet+at+https%3A//jschmitt.fr/memory" target="_blank" rel="noopener noreferrer">
                            <Fa icon="twitter"/>
                        </Button>

                        <Button size="sm" color="blue darken-4" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//jschmitt.fr/memory" target="_blank" rel="noopener noreferrer">
                            <Fa icon="facebook"/>
                        </Button>

                    </ModalBody>
                </Modal>
            </Container>
        );
    }
}

export default VictoryModal;