import React, {useEffect, useState} from 'react';
import { useRef} from 'react';
import { obtenerUsuarios } from '../../utils/api';
import { nanoid } from 'nanoid';
import Tooltip from '@mui/material/Tooltip';
import Navbar from '../navbar/Navbar';
import './style.css';

const Usermaster = () => {

    const [user, setUser] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [showTabla, setShowTabla] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [nameBtn, setNameBtn]= useState("Agregar Usuario")

    const Toggle = ()=>{
        setShowForm(!showForm)
        console.log(showForm)
    }

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

    useEffect(()=>{
        if(showTabla){
            console.log()
            setNameBtn("Agregar Usuario")
        }else{
            setNameBtn("Mostrar Usuarios")
        }
    }, [showTabla])

    return (
        <>
          <Navbar/> 
          <section className="block__main">
            <div className="cont-btn">
                <button onClick={ 
                    ()=>{
                        setShowTabla(!showTabla)
                        Toggle()
                    }}
                className="btn_crear">{nameBtn}</button>
            </div>
            <FormNuevo showForm={showForm} close={Toggle}/>
            <div className="block__busqueda">
                <h4>Que usuario deseas editar?</h4>
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
            <td className="actions_style">
                <Tooltip title="Editar Usuario" arrow>
                    <i className="far fa-edit"></i>
                </Tooltip>
                <Tooltip title="Eliminar Usuario" arrow>
                    <i className="far fa-trash-alt"></i>
                </Tooltip>
            </td>
            
        </tr>
    )
}

const FormNuevo = ({showForm, close})=>{
    const formRef = useRef(null);

    const submitForm = ()=>{
        //codigo para enviar formulario
    }

    return(
        <>
        {
            showForm ? (

            <div className="formCont" onClick={()=>{close()}}>
                <div onClick={(e) => e.stopPropagation()} className="formUser">
                    <form onSubmit={submitForm} ref={formRef} className="fromularioUsuarios">
                        <h2>Añadir Nuevo Usuario</h2>
                        <label htmlFor="user">
                            usuario
                            <input type="text" name="user" placeholder="nombreUsuario" required/>
                        </label>
                    </form>
                </div>
            </div>
            
            
            ) : null

        }
        </>
    )
}

export default Usermaster
