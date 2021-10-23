import React from 'react';
import Navbar from '../navbar/Navbar';
import './style.css';

const Usermaster = () => {
    return (
        <>
          <Navbar/> 
          <section className="block__main">
            <div className="block__busqueda">
                <h4>Que usuario deseas editar?</h4>
                <select>
                    <option>Administrador</option>
                    <option>Vendedor</option>
                </select>
            </div>
            <div className="block__tabla">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>usuario</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Estado</th>
                            <th>Rol</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>102104</td>
                            <td>@Pepito</td>
                            <td>Pepe</td>
                            <td>Pepito@Gmail.com</td>
                            <td>Activo</td>
                            <td>Admi</td>
                            <td><i class="far fa-edit"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </section> 
        </>
    )
}

export default Usermaster
