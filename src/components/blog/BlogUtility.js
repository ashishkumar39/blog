import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import BlogComment from './BlogComment';
import BlogLike from './BlogLike';
import BlogShare from './BlogShare';

class BlogUtility extends Component {

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
            <>
                <BlogLike onClick={this.toggleLikeButton} like={this.state.like} />
                <BlogComment />
                <BlogShare />
            </>
        );
    }
}

export default BlogUtility;