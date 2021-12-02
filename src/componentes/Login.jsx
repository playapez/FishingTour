import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios'
import Swal from 'sweetalert2'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        PlayaPez
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const [correo,setCorreo]=useState('')
  const [contrasena,setContrasena]=useState('')
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    //const data = new FormData(event.currentTarget);
    const usuario={correo,contrasena}
    const respuesta= await Axios.post('/Usuario/login',usuario)
    const mensaje=respuesta.data.mensaje
    // eslint-disable-next-line no-console
    console.log(respuesta);
    if(mensaje!=='Bienvenido')
        {
            Swal.fire({
            icon: 'error',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
              })
        }

        else{
            const token= respuesta.data.token
            const nombres= respuesta.data.Nombres
            const idusuario=respuesta.data.id
            sessionStorage.setItem('token',token)
            sessionStorage.setItem('nombres',nombres)
            sessionStorage.setItem('idusuario',idusuario)
            window.location.href='/Inicio'
        }
  }


  return (
      <div className="container">
          <br/>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100hv' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesion
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="correo"
                label="Correo Electronico"
                name="correo"
                autoComplete="current-email"
                autoFocus
                onChange={(e)=>setCorreo(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="contrasena"
                label="Contraseña"
                type="password"
                id="contrasena"
                autoComplete="current-password"
                onChange={(e)=>setContrasena(e.target.value)}
              
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recuerdame"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesion
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Olvidaste tu contraseña ?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/Registro" variant="body2">
                    {"¿No tienes una cuenta? Únete"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
  );
}