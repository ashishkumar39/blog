import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class BlogSection extends Component {
    render() {
        return (
            this.props.children
        );
    }
}

export default BlogSection;