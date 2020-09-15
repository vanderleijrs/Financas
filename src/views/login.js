import React from 'react'
import {withRouter} from 'react-router-dom'
class Login extends React.Component{
    state={
        email:'',
        senha:'',
    }

    entrar=()=>{
            console.log('Email:',this.state.email)
            console.log('Senha',this.state.senha)
    }
    prepareCadastrar=()=>{
        this.props.history.push('/cadastro-usuarios')
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-6" style={{position :'relative',left:'300px'}}>
                    <div className="bs-docs-section">
                      
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                       
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Login)