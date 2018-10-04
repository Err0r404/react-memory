import React  from 'react';
import { Navbar, NavbarBrand, Container } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import logo from '../logo.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="orange" dark expand="md" scrolling>
                    <Container>
                        <NavbarBrand href="/">
                            <img src={logo} height="30" className="d-inline-block align-top mr-2" alt={"React.JS Memory game"}/>
                            <strong>Memory</strong>
                        </NavbarBrand>
                    </Container>
                </Navbar>
            </Router>
        );
    }
}

export default Header;