import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class BlogSubTitle extends Component {
    render() {
        return (
            <div className="h4 text-center text-secondary font-weight-light">{ this.props.subtitle }</div>
        );
    }
}

export default BlogSubTitle;