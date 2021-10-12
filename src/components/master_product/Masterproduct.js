import React from 'react'
import Navbar from '../navbar/Navbar'

/*importar estilos*/ 
import './style.css'

const Masterproduct = () => {
    return (
        <>
          <Navbar/>  
          <section className="cont-principal">
              <div className="funciones">
                  <button type="submit"><i class="fas fa-plus"></i> New product</button>  
                  <div className="busqueda">
                      <input type="text"/>
                      <i class="fas fa-search"></i>
                  </div>
              </div>
              <div className="tabla">
                  <table>
                      <thead>
                          <tr>
                              <th>id product</th>
                              <th>Description</th>
                              <th>Price</th>
                              <th>Estado</th>
                              <th>Editar</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Coca cola</td>
                              <td>bebida</td>
                              <td>2500</td>
                              <td>en stock</td>
                              <td>icono</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </section>
        </>
    )
}

export default Masterproduct
