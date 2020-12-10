import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class BlogSection extends Component {
    render() {
        return (
            <p className="">{ this.props.children }</p>
        );
    }
}

export default BlogSection;