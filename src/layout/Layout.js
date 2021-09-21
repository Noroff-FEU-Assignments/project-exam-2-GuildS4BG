import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";

function Layout() {
    return (
        <Router>
            <Navbar sticky="top" bg="light" expand="lg">
                <Container>
                    <NavLink to="/" exact>
                        <Navbar.Brand>Holidaze</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" exact className="nav-link">
                                Home
                            </NavLink>
                            <NavLink to="/contact" className="nav-link">
                                Contact
                            </NavLink>
                            <NavLink to="/login" className="nav-link">
                                Login
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </Container>
        </Router>
    );
}

export default Layout;