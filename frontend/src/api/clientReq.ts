"use client";

import axios from "axios";

export const getAPI = () => {
  const api = axios.create({
    baseURL: "http://localhost:3000/api",
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  return api;
};

export const clientReq = getAPI();
