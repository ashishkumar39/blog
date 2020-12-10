import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class BlogTitle extends Component {
    render() {
        return (
            <h1 className="display-1 text-center">{ this.props.title }</h1>
        );
    }
}

export default BlogTitle;