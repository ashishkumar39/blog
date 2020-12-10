import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Card, Image, ListGroup } from 'react-bootstrap';

class Sidebar extends Component {

    state = {
        links: [
            { url: "dependency-injection", name: "Dependency Injection" },
            // { url: "hibernate", name: "Hibernate" },
            // { url: "strategy-pattern", name: "Strategy Pattern" },
            // { url: "factory-pattern", name: "Factory Pattern" },
            // { url: "factory-pattern", name: "Factory Pattern" },
            // { url: "factory-pattern", name: "Factory Pattern" },
            // { url: "factory-pattern", name: "Factory Pattern" },
            // { url: "factory-pattern", name: "Factory Pattern" }
        ]
    }

    render() {
        return (
            <>
                <Card>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/face1.png'} />
                    <Card.Body>
                        <Card.Title>Ashish</Card.Title>
                        <Card.Text>
                        Things I find interesting :)
                        </Card.Text>
                    </Card.Body>
                </Card>
                <ListGroup>
                    {/* <NavLink to="/"><ListGroup.Item>Home</ListGroup.Item></NavLink> */}
                    { this.state.links.map(link => <NavLink to={ "/blogs/" + link.url }><ListGroup.Item>{ link.name }</ListGroup.Item></NavLink>) }
                </ListGroup>
            </>
        );
    }
}

export default Sidebar;