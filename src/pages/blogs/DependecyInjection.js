import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import BlogSection from '../../components/BlogSection';
import BlogTitle from '../../components/BlogTitle';
import BlogSubTitle from '../../components/BlogSubTitle';
import BlogDate from '../../components/BlogDate';
import BlogLike from '../../components/BlogLike';
import { Col, Row } from 'react-bootstrap';

class DependencyInjection extends Component {

    state = {
        content: [
            {   p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla.", 
                img1: "image link"
            }, 
            {   p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla.", 
                img1: "image link"
            },
            {   p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla.", 
                img1: "image link"
            },
        ],
        like: {
            show: false,
            counter: 0
        },
        counter: 0
    }

    showLike = () => {
        if(this.state.like.show === false) {
            this.setState({ like: { show: true, counter: this.state.like.counter + 1 } });
        }
    }

    render() {
        return (
            <>
                <BlogTitle title="Dependency Injection" />
                <BlogSubTitle subtitle="Dependecy Injection from absolute basics" />
                <div className="d-flex justify-content-between">
                    <BlogDate date="10-Dec-2020" />
                    <BlogLike onClick={this.showLike} like={this.state.like} />
                </div>
            { this.state.content.map(c => <BlogSection section={c.p1} />) }
            </>
        );
    }
}

export default DependencyInjection;