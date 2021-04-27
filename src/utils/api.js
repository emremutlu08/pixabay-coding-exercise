/* Imports */
import axios from "axios";

/* This is a helper function that sipmlify api calls  */
const apiKey = "6473511-0417f2cad683f1bee54cafe15";
const api = axios.create({
  baseURL: `https://pixabay.com/api/?key=${apiKey}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
