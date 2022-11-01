import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DataCard from "./DataCard";
import AddSourceButton from "./AddSourceButton";
import { useState, useEffect } from "react";
import { getData } from "../services/api.js";

export default function DataSources() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
  }, []);

  console.log(data);
  let postgresSources = data.postgres;
  let graphqlSources = data.graphql;
  let openapiSources = data.openapi;

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 h-screen">
        <Navbar name="Data Sources" />
        {postgresSources
          ? postgresSources.map((source, idx) => {
              return (
                <DataCard
                  key={idx}
                  name={source.name}
                  type="Postgres"
                  connection="Connection String"
                  connectionDetails={source.connectString}
                />
              );
            })
          : null}
        {graphqlSources
          ? graphqlSources.map((source, idx) => {
              return (
                <DataCard
                  key={idx}
                  name={source.name}
                  type="Graphql"
                  connection="Endpoint"
                  connectionDetails={source.connectString}
                />
              );
            })
          : null}
        {openapiSources
          ? openapiSources.map((source, idx) => {
              return (
                <DataCard
                  key={idx}
                  name={source.name}
                  type="Openapi"
                  connection="Endpoint"
                  connectionDetails={source.connectString}
                />
              );
            })
          : null}
        {/* <DataCard
          name="Pet Store"
          type="Postgres"
          connection="Connection String"
          connectionDetails="postgres://postgres1234567"
        />
        <DataCard
          name="Space"
          type="GraphQL"
          connection="Endpoint"
          connectionDetails="http://spacex.com/graphql"
        /> */}
        <AddSourceButton />
      </div>
    </>
  );
}
