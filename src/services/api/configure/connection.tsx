import axios from 'axios';

const dummyApi = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 10000, // Tiempo máximo de espera por cada solicitud en milisegundos (opcional)
    headers: {
      'Content-Type': 'application/json', // Tipo de contenido para todas las solicitudes (opcional)
    },
});

export default dummyApi;
