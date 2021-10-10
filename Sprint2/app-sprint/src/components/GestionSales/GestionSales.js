import React , { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './GestionSales.module.css';


class GestionSales extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            modalInsertar: false,
        };
    }

    mostrarModalInsertar = () => {
        this.setState({modalInsertar:true})
    };

    render() {
        return(
            <div className="GestionSales">
                <label>Bienvenido a la gestion de ventas</label>
            </div>
        )
    }
}

export default GestionSales;