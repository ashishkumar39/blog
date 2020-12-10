import { Component } from 'react';
import { Alert, Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class BlogTag extends Component {

    render() {

        const style = {
            cursor: "pointer",
            empty: {

            },
            filled: {
                // fill: "#FFFFFF"
            }
        };

        return (
            // <Alert variant="secondary">{this.props.tag}</Alert>
            <Badge variant="secondary">{this.props.tag}</Badge>
        );
    }
}

export default BlogTag;