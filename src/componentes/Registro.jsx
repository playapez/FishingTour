import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function Registro() {
    return (
        <div className="container">
            <br/>
            <Form>
                <Row>
                    <Col>
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control placeholder="Nombres" />
                    </Col>
                    <Col>
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control placeholder="Apellidos" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control placeholder="Dir.." />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Select defaultValue="Seleccione" placeholder="Seleccione">
                            <option>Seleccione..</option>
                            <option>Barranquilla</option>
                            <option>Cartagena</option>
                            <option>Monteria</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Select defaultValue="Seleccione">
                            <option>Seleccione..</option>
                            <option>Atlantico</option>
                            <option>Bolivar</option>
                            <option>Cordoba</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Registrar
                </Button>
            </Form>
        </div>
    );
}
