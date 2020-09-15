import React from 'react'
import {withRouter} from 'react-router-dom'

class CadastroUsuario extends React.Component{
    state ={
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao:''
    }
    cadastrar=()=>{console.log(this.state)}
    cancelar=()=>{
        this.props.history.push('/login')
    }
    render(){
        return(
            <div className='container'>
               
                    <div className="row">
                     
                    </div>
                
            </div>
        )
    }
}
export default withRouter(CadastroUsuario)