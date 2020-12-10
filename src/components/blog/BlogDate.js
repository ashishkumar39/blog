import { Component } from 'react';

class BlogDate extends Component {
    render() {
        return (
            <p className="font-weight-light text-secondary">{ this.props.date }</p>
        );
    }
}

export default BlogDate;