import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {Table, Button, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';


const DATOS = [
  { id: 1, email: "jose@gmail.com", phoneNumber: "11111", address: "Av Huston Pards 32", firstName: "Jose", lastName: "Garcia" },
  { id: 2, email: "felipe@gmail.com", phoneNumber: "22222", address: "Calle Road Better #12", firstName: "Felipe", lastName: "Rojas" },
  { id: 3, email: "nicolas@gmail.com", phoneNumber: "333333", address: "KR 101 Wisdom-Mark", firstName: "Nicolas", lastName: "Moncada" },
  { id: 4, email: "majo@gmail.com", phoneNumber: "444444", address: "Av  South WallBrick 2 ", firstName: "Maria", lastName: "Capera" },
  { id: 5, email: "marlon@gmail.com", phoneNumber: "55555", address: "Cll Wallas Root 23", firstName: "Marlon", lastName: "Muete" }
];

class GestionUsers extends Component{

    constructor(props) {
      super(props);

      this.state = {
        datos : DATOS,
        modalInsertar: false,
        modalActualizar: false,
        form: {
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          address: ""
        }
      };
    }

    mostrarModalActualizar = (dato) => {
      this.setState({modalActualizar:true, form:dato})
    };

    cerrarModalActualizar = () => {
      this.setState({modalActualizar:false})
    };

    mostrarModalInsertar = () => {
      this.setState({modalInsertar:true})
    };

    cerrarModalInsertar = () => {
      this.setState({modalInsertar:false})
    };

    editar = (dato) => {
      let cont = 0;
      let aux = this.state.datos;
      aux.map((datoAux) => {
        if (dato.id === datoAux.id) {
          aux[cont].firstName = dato.firstName;
          aux[cont].lastName = dato.lastName;
          aux[cont].email = dato.email;
          aux[cont].phoneNumber = dato.phoneNumber;
          aux[cont].address = dato.address;
        }
        cont++;
      });
  
      this.setState({datos: aux, modalActualizar:false });
    };

    eliminar = (dato) => {
      let opcion = window.confirm("¿Está usted seguro de eliminar a " + dato.firstName + " " + dato.lastName + "?");
      if (opcion) {
        let cont = 0;
        let aux = this.state.datos;
        aux.map((datoAux) => {
          if (dato.id === datoAux.id) {
            aux.splice(cont, 1);
        };
          cont++
        });
        this.setState({datos: aux});
      }
    };

    insertar = () => {
      let newUser = {...this.state.form};
      newUser.id = this.state.datos.length + 1;

      let aux = this.state.datos;
      aux.push(newUser);

      this.setState({datos: aux, modalInsertar:false});
    };

    handleChange = (e) =>{
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        }
      })
    }
    
    render() {
      return(
        <>
        <Container>
          <br />
          <Button color="primary" onClick={() => this.mostrarModalInsertar()}>Insertar nuevo registro</Button>
        <br /> <br />
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>email</th>
              <th>Télefono</th>
              <th>Dirección</th>
            </tr>
          </thead>
          <tbody>
            {this.state.datos.map((dato) =>(
              <tr key={dato.id}>
                <td>{dato.firstName}</td>
                <td>{dato.lastName}</td>
                <td>{dato.email}</td>
                <td>{dato.phoneNumber}</td>
                <td>{dato.address}</td>
                <td><Button color="success"
                onClick={() => this.mostrarModalActualizar(dato)}>Editar</Button>{"  "}
                <Button color="danger"
                onClick={() => this.eliminar(dato)}>Eliminar</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div><h3>Actualizar Usuario {this.state.form.id}</h3></div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Email:
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.email}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>
                Nombre:
              </label>
              <input
                className="form-control"
                name="firstName"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.firstName}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Apellido:
              </label>
              <input
                className="form-control"
                name="lastName"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.lastName}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Dirección:
              </label>
              <input
                className="form-control"
                name="address"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.address}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Telefóno:
              </label>
              <input
                className="form-control"
                name="phoneNumber"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.phoneNumber}
              />
            </FormGroup>
            </ModalBody>
            <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Actualizar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Insertar Usuario</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.datos.length + 1}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Email:
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>
                Nombre:
              </label>
              <input
                className="form-control"
                name="firstName"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Apellido:
              </label>
              <input
                className="form-control"
                name="lastName"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Dirección:
              </label>
              <input
                className="form-control"
                name="address"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Telefóno:
              </label>
              <input
                className="form-control"
                name="phoneNumber"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        </>
      );
    }
}



export default GestionUsers;
