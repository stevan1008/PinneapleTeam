import React , { Component } from 'react';
import {Col, Container, Form, Input, Row, Table, Button, Modal, ModalBody, Label, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';


const DATOS = [
    {idSale : 1, idClient: "1111", firstNameClient: "Pepito", lastNameClient: "Perez", productName: "Arroz", unitPrice: 2000},
    {idSale : 2, idClient: "1112", firstNameClient: "Marcos",lastNameClient: "De los Angeles", productName: "Paquete gomitas x12", unitPrice: 3500},
    {idSale : 3, idClient: "1113", firstNameClient: "Fulano",lastNameClient: "De Tal", productName: "Poker lata x6", unitPrice: 15000},
]

class GestionSales extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            datos : DATOS,
            modalRegistrar: false,
            modalActualizar: false,
            busqueda: '',
            datosBusqueda: '',
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

    estadoModalActualizar = (dato) => {
        this.setState({modalActualizar: !this.state.modalActualizar, form:dato})
    }

    registrarVenta = () => {
        let newSale = {...this.state.form};
        newSale.idSale = this.state.datos.length + 1;

        let aux = this.state.datos;
        aux.push(newSale);

        this.setState({datos: aux, modalRegistrar: false});
    }

    editar = (dato) => {
        let cont = 0;
        let aux = this.state.datos;
        aux.map((datoAux) => {
          if (dato.idSale === datoAux.idSale) {
            aux[cont].idClient = dato.idClient;
            aux[cont].firstNameClient = dato.firstNameClient;
            aux[cont].lastNameClient = dato.lastNameClient;
            aux[cont].productName = dato.productName;
            aux[cont].unitPrice = dato.unitPrice;
          }
          cont++;
        });

        this.setState({datos: aux, modalActualizar:false });
    };

    handleChange = (e) =>{
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          }
        });
        console.log(this.state.busqueda)
    }

/* Esta funcion obChange se usa exclusivamente para la barra de busqueda */
    onChange=async e =>{
        e.persist();
        await this.setState({busqueda: e.target.value});
        this.filtrarElementos()
    }

    filtrarElementos(){
        var search=DATOS.filter(item=>{
            if(item.idSale.toString().includes(this.state.busqueda) ||
               item.idClient.toString().includes(this.state.busqueda) ||
               item.firstNameClient.toLowerCase().includes(this.state.busqueda) ||
               item.lastNameClient.toLowerCase().includes(this.state.busqueda)){
                return item;
            }
        });
        this.setState({datos: search})
    }

    /* componentDidMount(){
        this.setState({datosBusqueda: DATOS})
    } */

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
                            <Input type="text" 
                            placeholder="ID venta, ID cliente o nombre del cliente" 
                            name="busqueda"
                            onChange={this.onChange}
                            />
                        </Form>
                        <br /> <br />
                    </Col>
                    <Col xs="1">
                        <br />
                        <Button color="secondary" onClick= {() => this.filtrarElementos()}>
                            <span className="fa fa-search fa-lg"></span></Button>
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
                                <td><Button color="success" onClick= {() => this.estadoModalActualizar(dato)}>
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
                            <Label>ID Venta: </Label>
                            <Input type="text" 
                            name="idSale"
                            value={this.state.datos.length + 1} 
                            disabled/>
                        </FormGroup>
                        <FormGroup>
                            <Label>ID Cliente: </Label>
                            <Input type="text"
                            name="idClient"
                            onChange={this.handleChange}
                            required 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Nombre del Cliente:</Label>
                            <Input type="text"
                            name="firstNameClient"
                            onChange={this.handleChange}
                            required 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Apellido del Cliente:</Label>
                            <Input type="text"
                            name="lastNameClient"
                            onChange={this.handleChange} 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Nombre del producto:</Label>
                            <Input type="text"
                            name="productName"
                            onChange={this.handleChange}
                            required 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Precio unitario del producto:</Label>
                            <Input type="text"
                            name="unitPrice"
                            onChange={this.handleChange}
                            required 
                            />
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

            <Modal isOpen={this.state.modalActualizar}>

                {/*Modal para Actualizar ventas */}

                <ModalHeader>
                <div><h3>Actualizar venta {this.state.form.idSale}</h3></div>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>ID Venta: </Label>
                            <Input type="text"
                            name="idSale"
                            value={this.state.form.idSale}
                            disabled/>
                        </FormGroup>
                        <FormGroup>
                            <Label>ID Cliente: </Label>
                            <Input type="text"
                            name="idClient"
                            onChange={this.handleChange}
                            value={this.state.form.idClient}
                            required 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Nombre del Cliente:</Label>
                            <Input type="text"
                            name="firstNameClient"
                            onChange={this.handleChange}
                            value={this.state.form.firstNameClient}
                            required 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Apellido del Cliente:</Label>
                            <Input type="text"
                            name="lastNameClient"
                            onChange={this.handleChange} 
                            value={this.state.form.lastNameClient}
                            required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Nombre del producto:</Label>
                            <Input type="text"
                            name="productName"
                            onChange={this.handleChange}
                            value={this.state.form.productName}
                            required 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Precio unitario del producto:</Label>
                            <Input type="text"
                            name="unitPrice"
                            onChange={this.handleChange}
                            value={this.state.form.unitPrice}
                            required 
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>

                    <Button
                    color="primary"
                    onClick={() => this.editar(this.state.form)}>Actualizar
                    </Button>

                    <Button color="danger" 
                    onClick={this.estadoModalActualizar}>Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}

export default GestionSales;