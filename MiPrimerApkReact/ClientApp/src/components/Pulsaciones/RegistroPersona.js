
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './RegistroPersona.css';


export class RegistroPersona extends Component {
    static displayName = RegistroPersona.name;


    render () {
        return (
            <div class="container">
                <div
        class="cabecera-formulario">
        <p class="tituloContainer"><i class="fas fa-dog"></i> Registro De Personas</p>
      </div>

<Form>
  <Form.Group controlId="id">
    <Form.Label>Identificacion</Form.Label>
    <Form.Control type="text" placeholder="12033940" />
  </Form.Group>
  <Form.Group controlId="nombre">
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="text" placeholder="Luis Rocha" />
  </Form.Group>
  <Form.Group controlId="edad">
    <Form.Label>Edad :</Form.Label>
    <Form.Control type="number" placeholder="20" />
  </Form.Group>
  <Form.Group controlId="sexo">
    <Form.Label>Sexo :</Form.Label>
    <Form.Control as="select">
      <option>M</option>
      <option>F</option>
      
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="pulsacion">
    <Form.Label>Pulsacion :</Form.Label>
    <Form.Control type="number" placeholder="20" />
  </Form.Group>
   <Button type="submit">Registrar</Button>{' '}
   <Button type="reset">Limpiar</Button>{' '}
</Form><br></br><br></br>
</div>
);
}
}