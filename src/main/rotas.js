import React from 'react'
import {Route, Switch,HashRouter} from 'react-router-dom'
import Login  from '../views/login'
import Home from '../views/home'
import TableComponent from'../components/Table/Table'

import CadastroUsuario from '../views/cadastroUsuario'
function Rotas(){
    return(
      <HashRouter>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/Table" component={TableComponent}/>
          </Switch>
      </HashRouter>  
    )
}
export default Rotas