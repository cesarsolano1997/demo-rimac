import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: 'https://rimac-front-end-challenge.netlify.app/api/',
  timeout: 10000,
});