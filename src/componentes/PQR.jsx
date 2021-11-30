import React from 'react';
import { Form, Button } from 'react-bootstrap';


export default function componentName() {
  return (
      <div className="container">
          <br/>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Correo Electronico</Form.Label>
    <Form.Control type="email" placeholder="...." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Select>
    <option>Seleccionar...</option>
    <option>Peticiones</option>
    <option>Quejas</option>
    <option>Reclamos</option>
  </Form.Select>
  <br/>
    <Form.Label>Comentarios</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" type="submit">
                    Enviar
                </Button>
</Form>
</div>
  );
}