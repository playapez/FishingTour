import React,  { useState, useEffect }from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function PQR() {
  const [correo,setCorreo]=useState('')
  const [nombre,setnombre]=useState('')
  const [comentario,setcomentario]=useState('')
 
    
  const [opcion,setopcion]=useState([])
  const [opcionselect,setOpcionSelect]=useState('')
  
  const limpiarCampos = () => { 
    document.getElementById("form").reset();
}

  useEffect(()=>{

    setopcion(['Seleccione','Peticiones','Quejas','Reclamos'])
    setOpcionSelect('Seleccione')
},[])

  

  const pqr=async(e)=>{
    e.preventDefault()
  const pqrs={nombre,correo,comentario, opcion:opcionselect}
  const respuesta= await Axios.post('/pqr/crear',pqrs)
  const mensaje=respuesta.data.mensaje
  
  if(mensaje!=='Su Peticion, Queja o Reclamo ha sido creado satisfactoriamente. Nuestro personal revisará su peticion,queja o reclamo en breve.')
        {
            Swal.fire({
            icon: 'error',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
              })
        }
        else{
          const nombre= respuesta.data.nombre
          sessionStorage.setItem('correo',correo)
          sessionStorage.setItem('nombre',nombre)
          sessionStorage.setItem('comentario',comentario)
          sessionStorage.setItem('opcion',opcion)
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
    <Form id="form" noValidate onSubmit={pqr}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label >Nombre</Form.Label>
    <Form.Control  onChange={(e)=>setnombre(e.target.value)} type="text" placeholder="Pepito Perez" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label >Correo Electronico</Form.Label>
    <Form.Control onChange={(e)=>setCorreo(e.target.value)} type="email" placeholder="Correo@correo.com" />
  </Form.Group>
  
  <br/>
    <Form.Label>Comentarios</Form.Label>
    <Form.Control  onChange={(e)=>setcomentario(e.target.value)} as="textarea" rows={3} placeholder="Quiero Cancelar la reserva del día xx/xx/2021" />
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <br/>
  <Form.Select onChange={(e)=>setOpcionSelect(e.target.value)}>
   
  {
                                    opcion.map(op=>(
                                        <option key={op}>
                                            {op}

                                        </option>
                                    ))


                                }
   
  </Form.Select>
  </Form.Group>
  <Button variant="primary" type="submit">
                    Enviar
                </Button>
</Form>
</div>
  );
}