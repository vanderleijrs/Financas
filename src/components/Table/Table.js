import React from 'react';
import {Table} from 'react-bootstrap'
import ButtonComponent from "../Button/ButtonComponent"
export default function TableComponent() {
  
        return(
            <Table responsive>
            <thead>
              <tr>
                <h2>Clientes Cadastrados</h2>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{}</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td ><ButtonComponent>{"Nome do Cliente"}</ButtonComponent></td>
                ))}
              </tr>
            </tbody>
          </Table>
        )
    }

