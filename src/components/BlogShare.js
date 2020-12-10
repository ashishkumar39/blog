import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class BlogShare extends Component {

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
            <div className="py-1" onClick={this.props.onClick}>
                <svg style={style} width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-share-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                </svg>
            </div>
        );
    }
}

export default BlogShare;