import React , { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './GestionSales.module.css';
import { Col, Container, Form, Input, Navbar, Row } from 'reactstrap';
import {Table, Button, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';


const DATOS = [
    {idSale : "1", idClient: "1111", firstNameClient: "Pepito", lastNameClient: "Perez", productName: "Arroz", unitPrice: 2000},
    {idSale : "2", idClient: "1112", firstNameClient: "Marcos",lastNameClient: "De los Angeles", productName: "Paquete gomitas x12", unitPrice: 3500},
    {idSale : "3", idClient: "1113", firstNameClient: "Fulano",lastNameClient: "De Tal", productName: "Poker lata x6", unitPrice: 15000},
]

class GestionSales extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            datos : DATOS,
            modalRegistrar: false,
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

    estadoModalRegistrar = () => {
        this.setState({modalRegistrar: !this.state.modalRegistrar})
    }

    registrarVenta = () => {
        this.setState({modalRegistrar: false});
    }

    render() {
        return(
            <>
            <Container>
                <Row>
{/* Bootstrap usa 12 columnas 
    Se reparten con xs = ... las colkumnas que ocupará cada elemento
*/}
                    <Col xs= "3">
                        <br /> 
                        <Button color="primary" onClick= {() => this.estadoModalRegistrar()}>Registrar Nueva Venta</Button>
                        <br /> <br />
                    </Col>
                    <Col xs="3"></Col>
                    <Col xs="5">
                        <br />
                        <Form>
                            <Input type="text" placeholder="ID venta, ID cliente o nombre del cliente" name="busqueda"/>
                        </Form>
                        <br /> <br />
                    </Col>
                    <Col xs="1">
                        <br />
                        <Button color="secondary"><span className="fa fa-search fa-lg"></span></Button>
                        <br /><br />
                    </Col>
                </Row>
                
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
{/* <tr> crea un encabezado a la tabla con formato de encabezado
 */}
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

{/* Ahora vienen los modales, que son las ventanas emergentes
Los modales que se usarán será para registrar una nueva venta
y para editar ventas ya listadas */}


            <Modal isOpen={this.state.modalRegistrar}>

                {/*Modal para registrar ventas */}

                <ModalHeader>
                    <div><h3>Registrar Nueva Venta</h3></div>
                </ModalHeader>

                <ModalBody>
                    <Form>
                        <FormGroup>
                            <label>ID Venta: </label>
                            <input className="form-control" readOnly 
                            type="text" value={this.state.datos.length + 1}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>ID Cliente: </label>
                            
                        </FormGroup>
                    </Form>
                </ModalBody>

                <ModalFooter>
                    <Button 
                    color="primary" 
                    onClick={this.registrarVenta}>Registrar venta
                    </Button>
                    <Button color="danger" 
                    onClick={this.estadoModalRegistrar}>Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}

export default GestionSales;