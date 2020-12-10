import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class BlogSection extends Component {
    render() {
        return (
            <p>{ this.props.section }</p>
        );
    }
}

export default BlogSection;