import { Component } from 'react';

class BlogTitle extends Component {

    style = {
        fontSize: "7vw",
        fontWeight: "light"
    }

    render() {
        return (
            <h1 style={this.style} className="font-weight-light text-center">{ this.props.title }</h1>
        );
    }
}

export default BlogTitle;