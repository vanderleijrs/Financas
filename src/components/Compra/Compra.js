import React from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import CardComponent from '../Card/CardComponent'
class Compra extends React.Component {
    render() {
        return (
            <div className='container'><br />
                <CardComponent title="Compra">
                    <div class="container">
                        
                            <Form.Group>
                            <div class="row">
                                <div class="col-10">
                                    <Form.Control size="lg" type="text" placeholder="Descrição da compra" />
                                </div>
                                <div class="col-2">
                                    <Form.Control size="lg" type="text" placeholder="Preço" /><br />
                                </div>
                                <div className="container" style={{ textAlign: "right" }}>
                                    <Button variant="primary">Cadastrar Compra</Button>{''}
                                </div>
                                </div>    
                            </Form.Group>
                        
                    </div>
                </CardComponent>
            </div>
        )
    }
}
export default withRouter(Compra)