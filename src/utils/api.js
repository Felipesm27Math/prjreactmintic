import axios from "axios";

export const obtenerUsuarios = async (successCallback, errorCallback)=>{
    const options = {method: 'GET', url: 'http://localhost:4000/vendedor'};
    await axios.request(options).then(successCallback).catch(errorCallback);
}

export const crearUsuario = async(data, successCallback, errorCallback)=>{
    const options = {
        method: 'POST',
        url: 'http://localhost:4000/vendedor',
        headers: {'Content-Type': 'application/json'},
        data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
}

export const eliminarUsuario = async(id, successCallback, errorCallback)=>{
    const options = {
        method: 'DELETE',
        url: `http://localhost:4000/vendedor/${id}/`,
        headers: {'Content-Type': 'application/json'},
      };
      
    await axios.request(options).then(successCallback).catch(errorCallback);
}