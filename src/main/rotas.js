import React from 'react'
import {Route, Switch,HashRouter} from 'react-router-dom'
import Login  from '../views/login'
import Home from '../views/home'
import table from'../components/Table'
import CadastroUsuario from '../views/cadastroUsuario'
function Rotas(){
    return(
      <HashRouter>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/table" component={table}/>
          </Switch>
      </HashRouter>  
    )
}
export default Rotas