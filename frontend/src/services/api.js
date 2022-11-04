import axios from "axios";

export const getIP = async () => {
  let response = await axios.get("http://localhost:3001/api/aws/ip");
  if (response.data.ip) {
    return response.data.ip;
  } else {
    return "";
  }
};

export const getStatus = async () => {
  let response = await axios.get("http://localhost:3001/api/aws/status");
  if (response.data.status) {
    return response.data.status;
  } else {
    return response.data.error || "No deployments";
  }
};

export const getData = async () => {
  let response = await axios.get("http://localhost:3001/api/mesh/dataSources");
  return response.data;
};

export const getAuth = async () => {
  let response = await axios.get("http://localhost:3001/api/mesh/auth");
  return response.data;
};

export const submitDataSource = async (dataSourceObj) => {
  let response = await axios.post(
    "http://localhost:3001/api/mesh/datasources",
    dataSourceObj
  );
  return response.data;
};

export const deleteDataSource = async (dataSourceObj) => {
  let response = await axios.delete(
    "http://localhost:3001/api/mesh/datasources",
    { data: dataSourceObj }
  );
  return response.data;
};

export const submitEditDataSource = async (dataSourceObj) => {
  let response = await axios.put(
    "http://localhost:3001/api/mesh/datasources",
    dataSourceObj
  );
  return response.data;
};
