import React from 'react';
import {Button } from 'react-bootstrap'

export default function Home() {
    const [teste, fazerTeste] = React.useState("Bem Vindo!");

    const funcao = () => {
        fazerTeste("teste")
    }

        return (
            <div className="jumbotron">
                <h1 className="display-3">{ teste }</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p>Essa é sua área administrativa, utilize um das menus ou botões abaixo para navegar pelo</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#/cadastro-usuarios" role="button"> <i className="fa fa-users"></i>Cadastrar Usuário</a>
                    <a className="btn btn-danger btn-lg" href="https://bootwatch.com/flatly/#" role="button"> <i className="fa fa-users"></i>Cadastrar Lançamento</a>
                </p>
                <Button onClick={funcao}>
                    clique
                </Button>
            </div>
        )
}