import { Component } from 'react';
import { Alert, Jumbotron } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {
    render() {
        return (
            <>
                <Jumbotron>
                    <h1 className="display-1">404</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        Take me back to <Link to="/">Home</Link>
                    </p>
                </Jumbotron>
            </>
        );
    }
}

export default ErrorPage;