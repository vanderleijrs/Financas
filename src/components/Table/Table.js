import React from 'react';
import {Table} from 'react-bootstrap'
export default function TableComponent() {
   
        return(
            <Table responsive>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Descrição</th>
              { /* {Array.from({ length: 12 }).map((_, index) => (
                  <th key={index}>Table heading</th>
                ))}*/}
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{Array}</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        )
    }

