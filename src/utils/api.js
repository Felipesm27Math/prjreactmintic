import axios from "axios";

export const obtenerUsuarios = async (successCallback, errorCallback)=>{
    const options = {method: 'GET', url: 'http://localhost:4000/vendedor'};
    await axios.request(options).then(successCallback).catch(errorCallback);
}