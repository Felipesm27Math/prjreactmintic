import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
            <header>
                <nav className="navbarra">
                    <Link to="/home">
                        <div className="logo_nav">
                            <h3>Titulo Proyecto</h3>
                        </div>
                    </Link>

                    <ul className="menu">
                        <Ruta route="/" name="Home" />
                        <Ruta route="/product" name="Products" />
                        <Ruta route="/sales" name="Sales" />
                        <Ruta route="/user" name="User" />
                    </ul>
                </nav>
            </header>  
    )
}

const Ruta = ({route, name}) =>{
    return(
        <Link to={route}>
            <li>{name}</li>
        </Link>
    )
}

export default Navbar
