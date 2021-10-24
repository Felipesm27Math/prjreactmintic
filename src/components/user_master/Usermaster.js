import React, {useEffect, useState} from 'react';
import { obtenerUsuarios } from '../../utils/api';
import { nanoid } from 'nanoid';
import Navbar from '../navbar/Navbar';
import './style.css';

const Usermaster = () => {

    const [user, setUser] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true)

    useEffect(()=>{
       if(ejecutarConsulta){
           obtenerUsuarios(
                  (response)=>{
                      console.log(response.data);
                      setUser(response.data)
                  },
                  (error)=>{
                      console.log(error)
                  }
            );
            setEjecutarConsulta(false);
       }
       
    }, [ejecutarConsulta])



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
                <Tabla listaUser ={user}/>
            </div>
            </section> 
        </>
    )
}

const Tabla = ({listaUser})=>{
    return(
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
                {
                    listaUser.map((vendedor)=>{
                        return(
                            <FilaTabla key={nanoid} listaVendedores = {vendedor}/>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

const FilaTabla = ({listaVendedores})=>{
    return(
        <tr>
            <td>{listaVendedores._id}</td>
            <td>{listaVendedores.user}</td>
            <td>{listaVendedores.name}</td>
            <td>{listaVendedores.email}</td>
            <td>{listaVendedores.state}</td>
            <td>{listaVendedores.rol}</td>
            <td><i class="far fa-edit"></i></td>
        </tr>
    )
}

export default Usermaster
