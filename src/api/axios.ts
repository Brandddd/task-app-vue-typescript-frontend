import axios, { AxiosInstance } from "axios";
// El axios Instanve es su propia interface de tipos de datos para que nos diga que va dentro del objeto y errores de autocompletado para las propiedades que hagan falta

const apiBase: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiBase;
