import axios from "axios";

const api = axios.create({
  baseURL: "https://stockease.mooo.com/api",
});

api.interceptors.request.use((config) => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZlcm8yQGdtYWlsLmNvbSIsImV4cCI6MTcxOTczNTY3Mn0.CF98ztifbdRWZer9x77fvfFbhol4z-u-VpDhx9eIdoI";

  config.headers.Authorization = `Bearer ${accessToken}`;
  config.headers["Access-Control-Allow-Origin"] = "*";

  return config;
});

export default api;
