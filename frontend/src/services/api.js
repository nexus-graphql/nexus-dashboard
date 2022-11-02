import axios from "axios";

export const getIP = async () => {
  let response = await axios.get("http://localhost:3001/api/aws/ip");
  return response.data.ip;
};

export const getStatus = async () => {
  let response = await axios.get("http://localhost:3001/api/aws/status");
  return response.data.status;
};

export const getData = async () => {
  let response = await axios.get("http://localhost:3001/api/mesh/dataSources");
  return response.data;
};
