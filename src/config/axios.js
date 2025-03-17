const axios = require("axios");

// Create Axios instance with base URL
const api_prev = axios.create({
  baseURL: process.env.REACT_APP_PREV_BACK,
  withCredentials: true, // Habilitar el manejo de cookies
});

// Define headers for API requests
const headerAPI = {
  headers: {
    Cookie: "--",
    "Content-Type": "application/json",
    Authorization:
      "Basic eG1hY2hpbmE6YWMxMWM2NWVkZDc1MTdhMjA3NjM4ZTQzMDkzZjc1OGY=",
  },
};

module.exports = { api_prev, headerAPI };
