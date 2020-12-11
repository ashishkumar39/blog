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
import { Link } from 'react-router-dom';

class DependencyInjection extends Component {

    state = {
        content: [
            {   
                h: "Introduction",
                p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla.", 
                img: "dependency-injection.jpeg"
            }, 
            {   p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla.", 
                img: "image link"
            },
            {   
                h: "Something important",
                p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at eveniet temporibus error ex libero blanditiis illum non fuga deserunt. Vero voluptate voluptatem corporis fugiat soluta aliquam laborum quam nulla.", 
                img: "image link"
            },
            {
                h: "Code",
                code: "97b893145fee826c206678d22c9b9710"
            }
        ],
        like: {
            show: false,
            counter: 0
        },
        tags: [ "Java", "Spring" ],
        showModal: false
    }

    toggleLikeButton = () => {
        if(this.state.like.show === false) this.setState({ like: { show: true, counter: this.state.like.counter + 1 } });
        else this.setState({ like: { show: false, counter: this.state.like.counter - 1 } });
    }

    showShareModal = (visible) => {
        this.setState({ showModal: visible });
    }

    render() {
        return (
            <div className="">
                {/* <div className="px-2 mx-2 d-flex flex-column align-items-center justify-content-center">
                    <BlogLike onClick={this.toggleLikeButton} like={this.state.like} />
                    <BlogComment />
                    <BlogShare onClick={() => this.showShareModal(true)} />
                </div> */}
                <div>
                    <BlogTitle title="Dependency Injection" />
                    <BlogSubTitle subtitle="Dependecy Injection from absolute basics" />
                    <div className="px-2 mx-2 d-flex align-items-center justify-content-between">
                        <div>
                            <BlogWriter />
                            <BlogDate date="12-Dec-2020" />
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
                        <p>Dependency injection means to provide an object the instance variables that it is dependent on. That's it! But before diving deep into DI and spring let's start from the basics.</p>
                    </BlogSection>
                    {/* <Image src={ process.env.PUBLIC_URL + "/dependency-injection.jpeg" } /> */}
                    <img src={ process.env.PUBLIC_URL + "/dependency-injection.jpeg" } class="img-fluid" alt="Responsive image"></img>
                    <h4>Using a simple approach</h4>
                    <BlogSection>
                        <p>
                        Let's say we want to make an drawing app. Using this we can draw triangles on the screen. Let's make the <code>Triangle</code> class for this. Here, we will only have 3 instance variables(fields) as our points(coordinates). The constructor will set the values of the coordinates.
                        </p>
                        <Gist id="c7640921e7afc5ba772002648fbb1760" />
                        <p>These coordinates are of type <code>Point</code> and it's class looks something like this -</p>
                        <Gist id="aa20dc0906e9f04a818cddafb55ff4c9" />
                        <p>Now the question comes, where will we initialize the values for the co-ordinates of the traingle? Should I  initialize the <code>Points</code> in the <code>Triangle</code> class itself or make another class(something like a main class?) and initialize the points there? Let's start with initializing the <code>Points</code> in the <code>Triangle</code> class first. This is how it will look.</p>
                        <Gist id="ce7846868d5dd15f1e22d10ef10bafd2" />
                        <p>Easy right? Now I can easily draw my triangles with this code :D But there is something really awful here :P The thing is there is something called <mark><Link>Seperation of Concerns</Link></mark>. It is a design principle which says that every section of your code should handle seperate concerns and if something is not it's job to handle then it should not care about that. In our example we are doing exactly the opposite. It is not the job of <code>Triangle</code> class to initialize the <code>Point</code> objects. It's only job is to take 3 <code>Points</code> and draw a <code>Triangle</code>.</p>
                        <p>But wait? why should I care about that? It's works anyways right? Well yes, for now. But as the application grows it becomes really difficult to manage such code. The practice we are following right now is called <mark><Link>Strong Coupling</Link></mark>. Which is consided a really bad practice. It means we tying together our <code>Triangle</code> class with our <code>Point</code> class such that our <code>Traingle</code> class is responsible for creating the objects for the <code>Point</code> class. Which is not it's concern.</p> 
                    </BlogSection>
                    <h4>What else can I do?</h4>
                    <BlogSection>
                        <p>
                            What about the other option we talked about earlier? Make another class and there initialize all the objects we need in the <code>Triangle</code> class. Now I no longer need the initializations in the class itself therefore I will need a constructor to initialize the values for the <code>Points</code>.
                        </p>
                        <Gist id="4a9c6ed45469b4129edeae9cbed25633" />
                        <p>The constructor here is used to <mark>inject</mark> the values to the <code>Points</code>. Now we will use this constructor(make an object) in our <code>Main</code> class and provide the required dependencies for the class <code>Triangle</code>.</p>
                        <Gist id="650a6b00cc33ed101f7b0e76aa724151" />
                        <p>Output -</p>
                        <p><img src={ process.env.PUBLIC_URL + "/dependency-injection-output1.png" } class="img-fluid" alt="Responsive image"></img></p>
                        <p>This is also called <mark><Link>Constructor Injection</Link></mark> since we are injecting the objects through the constructor. Similarly if we inject the objects using <mark><Link>Setter Injection</Link></mark> in which we use the setter methods to inject the dependencies. These are the 2 types of the Dependency Injection.</p>
                        <p>So here we injected the <code>Points</code> to the <code>Triangle</code> object and that's it! This is dependency injection :D There are some frameworks which takes this to another level by automatically providing all the dependency on it's own. For example, <mark><Link>Spring Framework</Link></mark> uses <mark><Link>Inversion of Control</Link></mark> which handles the injection of the dependencies so that you only have to create any objects at all in your application!</p>
                        <p>Checkout my <mark><Link>Dependency Injection in Spring Framework</Link></mark> article!</p>
                    </BlogSection>
                    <BlogSection>
                        <p>If you find any mistakes feel free to point it out in the comments.</p>
                    </BlogSection>
                    <hr />
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

export default DependencyInjection;