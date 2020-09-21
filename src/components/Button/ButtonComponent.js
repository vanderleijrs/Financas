import React from 'react'
import {Button } from 'react-bootstrap'
export default function ButtonComponent() {
   let nome="Nome do Cliente"
    return( 
        <div class="container">
            <Button variant="primary" color="primary">
                {nome}
            </Button>

        </div>    
     )
}