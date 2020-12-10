import { Component } from 'react';
import { Alert, Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class BlogTag extends Component {

    render() {

        const style = {
            cursor: "pointer"
        };

        return (
            <Button variant="secondary" size="sm" className="mr-2">{this.props.tag}</Button>
        );
    }
}

export default BlogTag;