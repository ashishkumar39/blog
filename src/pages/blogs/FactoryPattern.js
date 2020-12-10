import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import BlogTitle from '../../components/BlogTitle';

class FactoryPattern extends Component {
    render() {
        return (
            <div className="">
                {/* <h1 className="display-1 text-center">Factory Pattern</h1> */}
                <BlogTitle title="Factory Pattern" />
            </div>
        );
    }
}

export default FactoryPattern;