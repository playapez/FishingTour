import React,  { useState }from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function Reservas() {
  const [correo,setCorreo]=useState(' ')
  const [nombres,setnombres]=useState(' ')
  const [apellidos,setapellidos]=useState(' ')
  const [telefono,settelefono]=useState(' ')
  const [fecha,setfecha]=useState(' ')  
  const limpiarCampos = () => { 
    document.getElementById("form").reset();
}
  const reserva=async(e)=>{
    e.preventDefault()
  const reservas={nombres,apellidos,correo,telefono,fecha}
  const respuesta= await Axios.post('/reserva/crear',reservas)
  const mensaje=respuesta.data.mensaje
  
  if(mensaje!=='Reserva Creada Satisfactoriamente')
        {
            Swal.fire({
            icon: 'error',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
              })
        }
        else{
          const nombres= respuesta.data.nombres
          sessionStorage.setItem('correo',correo)
          sessionStorage.setItem('nombres',nombres)
          sessionStorage.setItem('apellidos',apellidos)
          sessionStorage.setItem('telefono',telefono)
          sessionStorage.setItem('apellidos',apellidos) 
          sessionStorage.setItem('fecha',fecha)
          //window.location.href='/PQR'
          limpiarCampos()
          Swal.fire({
            icon: 'success',
            title: mensaje,
            
          })
        }
            
  }
  return (
      <div className="container">
          <br/>
    <Form noValidate onSubmit={reserva}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Nombres</Form.Label>
    <Form.Control onChange={(e)=>setnombres(e.target.value)} type="text" placeholder="Nombres" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Apellidos</Form.Label>
    <Form.Control onChange={(e)=>setapellidos(e.target.value)} type="text" placeholder="Apellidos" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Telefono</Form.Label>
    <Form.Control onChange={(e)=>settelefono(e.target.value)} type="number" placeholder="Telefono" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Correo Electrónico</Form.Label>
    <Form.Control onChange={(e)=>setCorreo(e.target.value)} type="email" placeholder="Correo Electrónico" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Fecha y Comentarios</Form.Label>
    <Form.Control onChange={(e)=>setfecha(e.target.value)} as="textarea" rows={3} placeholder="Fecha xx/xx/2021 -> paquete" />
  </Form.Group>
  <Button variant="primary" type="submit">
                    Reservar
                </Button>
</Form>
</div>
  );
}
