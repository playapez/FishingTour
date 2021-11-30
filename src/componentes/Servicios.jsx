import React from 'react';
import {CardGroup,Card,} from 'react-bootstrap';


export default function Servicios() {
  return (
    <div className="container">
        <br/>
        <CardGroup>
        <Card bg= 'dark' text='white'>
            <Card.Img variant="top" src='./assets/Bandejas.jpeg' />
            <Card.Body>
            <Card.Title>Bandejas</Card.Title>
            <Card.Text>
                Después de abiertos consuma en el menor tiempo posible. Conservar a temperatura de 0°C a 18°C. Verifique que el animal conserve color en las agallas, que sus ojos esten claros y brillantes y su carne se vea esponjada y fresca. Evite consumir si se notan modificaciones en alguno de los items anteriores. El olor es tambien un buen sintoma de frescura Tilapia roja, empacada en bandeja, fresca, lista para consumir. Ideal para consumir frita, apanada, al horno, asada o como mejor te guste.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card bg= 'dark' text='white'>
            <Card.Img variant="top" src="./assets/tilapia.png" />
            <Card.Body>
            <Card.Title>Tilapias</Card.Title>
            <Card.Text>
            El consumo frecuente de tilapia tiene ventajas antioxidantes como la protección a las células del envejecimiento y evitar algunos problemas cardíacos, ya que aporta grasas cardio protectoras (Omega 3) que no abundan en otras carnes, y que ayudan al control del colesterol en la sangre y previenen ciertos tipos de cáncer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card bg= 'dark' text='white'>
            <Card.Img variant="top" src="./assets/comida.jpeg" />
            <Card.Body>
            <Card.Title>Almuerzos</Card.Title>
            <Card.Text>
            Deliciosa tilapia frita acompañada de arroz con coco, ensalada y patacones.
            Tiempo de preparación
            15 minutos
            Tamaño de porción
            500gr de tilapia
            600gr de tilapia
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        </CardGroup>
    
    </div>
  );
}
