import { Component } from 'react';
import { Col, Navbar, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <Navbar bg="dark" className="d-flex justify-content-between">

                        <Navbar.Brand href="/">
                            <p className="text-light m-0">Bow Chicka Wow Wow</p>
                        </Navbar.Brand>
                <Row>
                    <Col><Link to="/" className="text-light">About</Link></Col>
                    <Col><Link to="/help" className="text-light">Help</Link></Col>
                </Row>
            </Navbar>
        );
    }
}

export default Footer;