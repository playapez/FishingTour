import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Inicio from './componentes/Inicio';
import Barra from './componentes/Barra';
import Servicios from './componentes/Servicios';
import Registro from './componentes/Registro';
import Login from './componentes/Login';
import Reservas from './componentes/Reservas';
import PQR from './componentes/PQR';
import Loginadm from './componentes/Loginadm'


function App() {
  return (
    <Router>
      <Barra/>
      <Route path='/Inicio' exact component={Inicio}/>
      <Route path='/Registro' exact component={Registro}/>
      <Route path='/Servicios' exact component={Servicios}/>
      <Route path='/Login' exact component={Login}/>
      <Route path='/Reservas' exact component={Reservas}/>
      <Route path='/PQR' exact component={PQR}/>
      <Route path='/Loginadm' exact component={Loginadm}/>
    </Router>
  );
}

export default App;
