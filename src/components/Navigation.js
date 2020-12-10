import { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Navigation extends Component {

    state = {
        activeItem: "home"
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <Navbar bg="light">
                <Navbar.Brand href="#home">Bow Chicka Wow Wow</Navbar.Brand>
            </Navbar>
        );
    }
}

export default Navigation;