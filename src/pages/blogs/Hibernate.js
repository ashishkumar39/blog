import { Component } from 'react';
import BlogSection from '../../components/blog/BlogSection';
import BlogTitle from '../../components/blog/BlogTitle';
import BlogSubTitle from '../../components/blog/BlogSubTitle';
import BlogDate from '../../components/blog/BlogDate';
import BlogLike from '../../components/blog/BlogLike';
import BlogShare from '../../components/blog/BlogShare';
import BlogComment from '../../components/blog/BlogComment';
import BlogTag from '../../components/blog/BlogTag';
import { Col, Image, Pagination, Row } from 'react-bootstrap';
import Gist from 'react-gist';
import BlogShareModal from '../../components/blog/BlogShareModal';
import BlogWriter from '../../components/blog/BlogWriter';

class Hibernate extends Component {

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
        tags: [ "Java", "Spring", "ORM", "Hibernate", "JDBC" ]
    }

    showLike = () => {
        if(this.state.like.show === false) this.setState({ like: { show: true, counter: this.state.like.counter + 1 } });
        else this.setState({ like: { show: false, counter: this.state.like.counter - 1 } });
    }

    render() {
        return (
            <div className="d-flex">
                {/* <div className="px-2 mx-2 d-flex flex-column align-items-center justify-content-center">
                    <BlogLike onClick={this.toggleLikeButton} like={this.state.like} />
                    <BlogComment />
                    <BlogShare onClick={() => this.showShareModal(true)} />
                </div> */}
                <div>
                    <BlogTitle title="Hibernate ORM basics" />
                    <BlogSubTitle subtitle="Dependecy Injection from absolute basics" />
                    <div className="px-2 mx-2 d-flex align-items-center justify-content-between">
                        <div>
                            <BlogWriter />
                            <BlogDate date="10-Dec-2020" />
                        </div>
                        <div className="d-flex align-items-center ">
                            <BlogLike onClick={this.toggleLikeButton} like={this.state.like} />
                            <BlogComment />
                            <BlogShare onClick={() => this.showShareModal(true)} />
                        </div>
                    </div>
                    {/* { this.state.content.map(c => {
                        return <>
                                    <h4>{c.h}</h4>
                                    <BlogSection section={c.p} />
                                    <Image src={ process.env.PUBLIC_URL + "/" + c.img } />
                                    <Gist id={c.code} />
                                </>
                    }) } */}
                    <h4>Introduction</h4>
                    <BlogSection>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla.
                    </BlogSection>
                    <Image src={ process.env.PUBLIC_URL + "/hibernate-orm-mapping.png" } />
                    <BlogSection>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </BlogSection>
                    <Gist id="97b893145fee826c206678d22c9b9710" />
                    <h4>Something important</h4>
                    <BlogSection>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla.
                    </BlogSection>
                    { this.state.tags.map(t => <BlogTag tag={t} />) }
                    <div className="d-flex align-items-center mt-4">
                        <BlogLike onClick={this.toggleLikeButton} like={this.state.like} />
                        <BlogComment />
                        <BlogShare onClick={() => this.showShareModal(true)} />
                    </div>
                    <Pagination className="d-flex justify-content-center">
                        <Pagination.Prev />
                        <Pagination.Item disabled>{"..."}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                    <BlogShareModal show={this.state.showModal} onHide={() => this.showShareModal(false) } />
                </div>
            </div>
        );
    }
}

export default Hibernate;