import React,{useEffect,useState} from 'react';
import {Navbar,Container,Offcanvas,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Barra (){
    const [menu,setMenu]=useState(false)
  useEffect(() => {
    if(sessionStorage.getItem('token')){
      setMenu(true)
    }
  }, [])
  const salir=()=>{
    sessionStorage.clear()
    window.location.href="/Login"
  }
    return (
        <div className="container">
            <Navbar bg="dark" variant="dark" expand={false}>
            <Container fluid>
                <Navbar.Brand href="/Inicio" alt="Playapez">
                    <img src='./assets/logo.png' width="50" alt="Playapez"/>
                </Navbar.Brand>
                <Navbar.Brand href="/Inicio">PlayaPez</Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                {
                    menu?
                    <div>
                <Navbar.Brand >Bienvenido {sessionStorage.getItem('nombres')}</Navbar.Brand>
                 <Navbar.Brand href="/Inicio"></Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Link className="navbar-brand" onClick={()=>salir()} to="/Login"> <i className='fas fa-user-times'></i>Salir</Link>
                </div> :
                <div>
                <Navbar.Brand href="/Login">Login</Navbar.Brand>
                </div>
                }
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/Inicio">Inicio</Nav.Link>
                    <Nav.Link href="/Registro">Registrate</Nav.Link>
                    <Nav.Link href="/Reservas">Reserva aqui</Nav.Link>
                    <Nav.Link href="/PQR">PQR</Nav.Link>
                    <NavDropdown title="Productos y servicios" id="offcanvasNavbarDropdown">
                        <NavDropdown.Item href="/Servicios">Tilapias</NavDropdown.Item>
                        <NavDropdown.Item href="/Servicios">Bandejas</NavDropdown.Item>
                        <NavDropdown.Item href="/Servicios">Comidas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Tours</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="search"
                    />
                    <Button variant="outline-success">Busqueda</Button>
                    </Form>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </div>
    )
}