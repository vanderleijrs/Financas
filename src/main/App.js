import React from 'react';
import Rotas from './rotas'
import NavbarTeste from  '../components/Navbar/Navbar'
import 'bootswatch/dist/flatly/bootstrap.css'

class App extends React.Component {
  state ={
    nome:""
  }  
  render(){
    return (
      <>
        <NavbarTeste/>
        <div className="container">
          <Rotas />
        </div>
      </>
    );
  }
  
}

export default App;
