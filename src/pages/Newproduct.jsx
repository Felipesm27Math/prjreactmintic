import React from 'react'
import Menu from '../components/menu'
import '../App.css'
const Newproduct = () => {
    return (
        <>
            <Menu/>
            <section class="formulariocont">
                <div class="cont-titulo">
                    <div class="titulo"><h4>New Product</h4></div>
                </div>
                <form>
                    <label>Product ID</label>
                    <input type="text" placeholder="Codigo del producto"/>
                    <label>Description</label>
                    <textarea type="text" placeholder="Codigo del producto"></textarea>
                    <label>Price</label>
                    <input type="text" placeholder="Codigo del producto"/>
                    <label>Status</label>
                    <select name="select">
                    <option value="value1">Estado</option>
                    <option value="value2" selected>Estado</option>
                    <option value="value3">Estado</option>
                    </select>
                    <button type="submit" class="btn-crear">Create</button>
                </form>
            </section>    
        </>
    )
}

export default Newproduct;
