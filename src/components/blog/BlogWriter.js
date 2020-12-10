import { Component } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class BlogWriter extends Component {

    style = {
        pointer: "cursor",
        borderRadius: "50%"
    }

    render() {
        return (
            <img className="rounded-circle" src={ process.env.PUBLIC_URL + "/face1.png" } width="100px" height="100px" />
        );
    }
}

export default BlogWriter;