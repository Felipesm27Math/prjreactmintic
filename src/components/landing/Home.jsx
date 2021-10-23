import React from 'react'
import './homestyle.css'
import imagen from '../../img/inicioSesion.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="principal_box">
           <div className="left_box">
               <img src={imagen} alt="Landing"/>
           </div>
           <div className="right_box">
               <div className="text_box">
               <h3>Bienvenido</h3>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it, dummy text ever since the 1500s,</p>
               </div>
               <div className="buton_box">
                    <Buton name="Iniciar Sesion" rute="/login"/>
                    <Buton name="Registrarse" rute="/login"/> 
               </div>


           </div>
        </div>
    )
}

const Buton = ({name, rute})=>{
    return(
        <Link to={rute}>
        <button className="buton">{name}</button>
        </Link>
    )
}

export default Home
