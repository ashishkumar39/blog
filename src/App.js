import './App.css';
import Home from './pages/Home';
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Sidebar from './components/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import DependencyInjection from './pages/blogs/DependecyInjection';
import Hibernate from './pages/blogs/Hibernate';
import FactoryPattern from './pages/blogs/FactoryPattern';
import StrategyPattern from './pages/blogs/StrategyPattern';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navigation />
        <div className="d-flex">
          <Col md="3" lg="2" className="d-none d-sm-none d-md-block d-lg-block">
            <Sidebar />
          </Col>
          <Col md="1" lg="2" className="d-none d-sm-none d-md-block"></Col>
          <Col md="7" lg="6" sm="" xs="12" className="mb-5">
            <Switch>
              <Route path="/blogs/dependency-injection">
                <DependencyInjection />
              </Route>
              <Route path="/blogs/hibernate">
                <Hibernate />
              </Route>
              <Route path="/blogs/strategy-pattern">
                <StrategyPattern />
              </Route>
              <Route path="/blogs/factory-pattern">
                <FactoryPattern />
              </Route>
              <Route path="/blogs" exact>
                {/* <Home /> */}
                <Redirect to="/blogs/dependency-injection" />
              </Route>
              <Route path="/" exact>
                {/* <Home /> */}
                <Redirect to="/blogs/dependency-injection" />
              </Route>
              <Route>
                <ErrorPage />
              </Route>
            </Switch>
          </Col>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
