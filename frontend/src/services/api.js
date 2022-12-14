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
  let response = await axios.post(
    "http://localhost:3001/api/mesh/typedefs",
    dataSourceObj
  );
  return response.data;
};

export const getLocalChanges = async () => {
  let response = await axios.get("http://localhost:3001/api/mesh/localchanges");
  return response.data.localChanges; // returns {localChanges: false}
};

export const updateLocalChanges = async (localChanges) => {
  let response = await axios.post(
    "http://localhost:3001/api/mesh/localchanges",
    { localChanges }
  );
  return response.data.localChanges;
};

export const deploy = async () => {
  await axios.post("http://localhost:3001/api/deployment/deploy");
  return;
};

export const redeploy = async () => {
  await axios.post("http://localhost:3001/api/deployment/redeploy");
  return;
};

export const destroy = async () => {
  await axios.post("http://localhost:3001/api/deployment/destroy");
  return;
};

export const getSchemaData = async () => {
  let response = await axios.get("http://localhost:3001/api/mesh/schemas");
  return response.data;
};

export const getFieldConnections = async () => {
  let response = await axios.get("http://localhost:3001/api/mesh/typedefs");
  return response.data;
};

export const deleteFieldConnection = async (id) => {
  let response = await axios.delete("http://localhost:3001/api/mesh/typedefs", {
    data: { id },
  });
  return response.data;
};
