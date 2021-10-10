import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './Home/Home';
import GestionUsers from './GestionUsers/GestionUsers';
import GestionSales from './GestionSales/GestionSales';
import Login from './Login/Login';

class Main extends Component {
    
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const HomePage = () => {
            return (
              <Home />
            );
        }
        const GestionUs = () => {
            return (
              <GestionUsers />
              );
        }
        const LoginPage = () => {
          return (
            <Login />
          );
        }
        const GestionSl = () => {
            return (
              <GestionSales />
            );
        }
          return (
            <div>
              <Header />
              <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/gestionusers' component={GestionUs} />
                <Route exact path='/login' component={LoginPage} />
                <Redirect to="/home" />
              </Switch>
              <Footer />
            </div>
          );
    }

}

export default Main;