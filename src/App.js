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
  Link
} from "react-router-dom";
import DependencyInjection from './pages/blogs/DependecyInjection';
import Hibernate from './pages/blogs/Hibernate';
import FactoryPattern from './pages/blogs/FactoryPattern';
import StrategyPattern from './pages/blogs/StrategyPattern';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Row>
        <Col md="2"><Sidebar /></Col>
        <Col md="2"></Col>
        <Col md="6">
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
            <Route path="/" exact>
              <Home />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Router>
  );
}

export default App;
