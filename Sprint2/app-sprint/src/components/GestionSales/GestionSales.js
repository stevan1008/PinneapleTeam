import React , { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './GestionSales.module.css';
import { Container, Navbar } from 'reactstrap';
import {Table, Button, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch } from "@fortawesome/free-solid-svg-icons"; 


const DATOS = [
    {idSale : "00001", idClient: "1111", firstNameClient: "Pepito", lastNameClient: "Perez", productName: "Arroz", unitPrice: 2000},
    {idSale : "00002", idClient: "1112", firstNameClient: "Marcos",lastNameClient: "De los Angeles", productName: "Paquete gomitas x12", unitPrice: 3500},
    {idSale : "00003", idClient: "1113", firstNameClient: "Fulano",lastNameClient: "De Tal", productName: "Poker lata x6", unitPrice: 15000},
]

class GestionSales extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            datos : DATOS,
            form: {
                idSale:"",
                idClient: "",
                firstNameClient: "",
                lastNameClient: "",
                productName: "",
                unitPrice: ""
            }
        };
    }

    render() {
        return(
            <>
            <Container>
                <br /> 
                <Button color="primary">Registrar Nueva Venta</Button>
                <br /> <br />
                <div className="barraBusqueda">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="textField"
                        name="busqueda"
                        value={this.state.busqueda}
                        onChange={this.onChange}
                    />
                    <button type="button" className="btnBuscar" >
                        {" "}
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <br /> <br />
                <Table>
                    <thead>
                        <tr>
                            <th>ID Venta</th>
                            <th>ID Cliente</th>
                            <th>Nombre del cliente</th>
                            <th>Apellido del cliente</th>
                            <th>Nombre del producto</th>
                            <th>Precio unitario</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.datos.map((dato) => (
                            <tr key={dato.idSale}>
                                <td>{dato.idSale}</td>
                                <td>{dato.idClient}</td>
                                <td>{dato.firstNameClient}</td>
                                <td>{dato.lastNameClient}</td>
                                <td>{dato.productName}</td>
                                <td>{dato.unitPrice}</td>
                                <td><Button color="success">
                                    Editar</Button>{"   "}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            </>
        )
    }
}

export default GestionSales;