import React, { Component } from "react";
import { Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);

        this.state={
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="images/logo.png" height="30" width="41" alt="PinnapleTeam" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                        <NavItem><NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span> Home</NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/home"><span className="fa fa-address-card fa-lg"></span> Gestion de Vendedores</NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/gestionusers"><span className="fa fa-address-book fa-lg"></span> Gestion de Usuarios</NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/contactus"><span className="fa fa-book fa-lg"></span> Administrador de Ventas</NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/login"><span className="fa fa-login fa-lg"></span> Login</NavLink></NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div row row-header>
                            <div className="col-12 col-sm-6">
                                <h1>
                                    PinnapleTeam
                                </h1>
                                <p>
                                    Bienvenidos, disfruten de su página.
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>             
            </div>
        );
    }
}

export default Header;