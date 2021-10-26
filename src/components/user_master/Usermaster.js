import React, {useEffect, useState} from 'react';
import { useRef} from 'react';
import { obtenerUsuarios, crearUsuario, eliminarUsuario } from '../../utils/api';
import { nanoid } from 'nanoid';
import Tooltip from '@mui/material/Tooltip';
import  Dialog  from '@mui/material/Dialog';
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
            <FormNuevo showForm={showForm} close={Toggle} ejecutarConsulta={setEjecutarConsulta} showTabla={setShowTabla}/>
            <div className="block__busqueda">
                <h4>Que usuario deseas editar?</h4>
            </div>
            <div className="block__tabla">
                    <Tabla listaUser ={user} ejecutarConsulta={setEjecutarConsulta}/>
            </div>
            </section> 
        </>
    )
}

const Tabla = ({listaUser, ejecutarConsulta})=>{
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
                            <FilaTabla key={nanoid} listaVendedores = {vendedor} ejecutarConsulta={ejecutarConsulta}/>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

const FilaTabla = ({listaVendedores, ejecutarConsulta})=>{
    const [confirmarEliminarUsuario, setConfirmarEliminarusuario] = useState(false)
    const [editar, setEditar] = useState(false);

    useEffect(()=>{
        console.log(confirmarEliminarUsuario)
    }, [confirmarEliminarUsuario])
    
    const deleteUsuario = async () =>{
        
        
        await eliminarUsuario(listaVendedores._id,
            (response)=>{
                console.log(response.data)
            },
            (error)=>{
                console.log(error)
            })
            console.log("eliminando")
            setConfirmarEliminarusuario(false)
            ejecutarConsulta(true)

    }

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
                    <i onClick = {()=>{setConfirmarEliminarusuario(!confirmarEliminarUsuario)}}className="far fa-trash-alt"></i>
                </Tooltip>
                <Dialog open={confirmarEliminarUsuario}>
                    <div className="dialogo_style">
                        <h3>Are you sure to Delete this property?</h3>  
                        <div>
                            <button onClick={()=>{deleteUsuario()}} className="btn-dialog btn-dialog-yes" >Yes</button>
                            <button onClick={()=>setConfirmarEliminarusuario(false)} className="btn-dialog btn-dialog-no">No</button>
                        </div>  
                    </div>
                </Dialog>
            </td>
            
        </tr>
    )
}

const FormNuevo = ({showForm, close, ejecutarConsulta, showTabla})=>{
    const formRef = useRef(null);

    const submitForm = async (event)=>{
        event.preventDefault();
        console.log("funcionando")
        const fd = new FormData(formRef.current);

        const nuevoUser = {}

        fd.forEach((value, key)=>{
            nuevoUser[key] = value;
        })
        
        //codigo para enviar formulario
        await crearUsuario(
            {
                user: nuevoUser.user,
                name: nuevoUser.name,
                email : nuevoUser.email,
                state : nuevoUser.state,
                rol: nuevoUser.rol
            },
            (response)=>{
                console.log(response.data)
            },
            
            (error)=>{
                console.log("salio este error", error)
            })

            showTabla(true)
            close()
            ejecutarConsulta(true);
    }

    return(
        <>
        {
            showForm ? (

            <div className="formCont" onClick={()=>{close()}}>
                <div onClick={(e) => e.stopPropagation()} className="formUser">
                    <form onSubmit={submitForm} ref={formRef} className="formularioUsuarios">
                        <h2>Formulario de Registro</h2>
                        <label htmlFor="user" className="label_style">
                            User
                            <input type="text" name="user" placeholder="Usuario" className="input_style" required/>
                        </label>
                        <label htmlFor="name" className="label_style">
                            Name
                            <input type="text" name="name" placeholder="Nombre" className="input_style" required/>
                        </label>
                        <label htmlFor="email" className="label_style">
                            Email
                            <input type="text" name="email" placeholder="Email" className="input_style" required/>
                        </label>
                        <label htmlFor="state" className="label_style">
                            State
                           <select name="state" defaultValue={0} className="select_style" required>
                                <option value={0} disabled selected>Select an state</option>
                                <option>Active</option>
                                <option>Inactive</option>
                           </select>
                        </label>
                        <label htmlFor="rol" className="label_style">
                            Rol
                           <select name="rol" defaultValue={0} className="select_style" required>
                                <option value={0} disabled selected>Select an rol</option>
                                <option>Admi</option>
                                <option>Seller</option>
                           </select>
                        </label>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
            
            
            ) : null

        }
        </>
    )
}

export default Usermaster
