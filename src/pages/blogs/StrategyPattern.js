import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import BlogSection from '../../components/BlogSection';
import BlogTitle from '../../components/BlogTitle';
import BlogSubTitle from '../../components/BlogSubTitle';
import BlogDate from '../../components/BlogDate';
import BlogLike from '../../components/BlogLike';
import BlogShare from '../../components/BlogShare';
import { Col, Image, Row } from 'react-bootstrap';
import Gist from 'react-gist';
import BlogComment from '../../components/BlogComment';
import BlogTag from '../../components/BlogTag';

class StrategyPattern extends Component {

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
        tags: [ "Java", "Spring", "Desgin Pattern", "Strategy Pattern" ]
    }

    showLike = () => {
        if(this.state.like.show === false) this.setState({ like: { show: true, counter: this.state.like.counter + 1 } });
        else this.setState({ like: { show: false, counter: this.state.like.counter - 1 } });
    }

    render() {
        return (
            <div className="d-flex">
                <div className="px-2 mx-2 d-flex flex-column align-items-center justify-content-center">
                    <BlogLike onClick={this.showLike} like={this.state.like} />
                    <BlogComment />
                    <BlogShare />
                </div>
                <div>
                    <BlogTitle title="Strategy Pattern" />
                    <BlogSubTitle subtitle="Stretegy design pattern" />
                    <BlogDate date="10-Dec-2020" />
                    <Image src={ process.env.PUBLIC_URL + "/strategy-pattern.png" } />
                    { this.state.content.map(c => <BlogSection section={c.p1} />) }
                    <Gist id="97b893145fee826c206678d22c9b9710" />
                    <Row>{ this.state.tags.map(t => <Col><BlogTag tag={t} /></Col>) }</Row>
                </div>
            </div>
        );
    }
}

export default StrategyPattern;