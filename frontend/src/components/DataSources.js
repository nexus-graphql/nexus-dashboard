import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DataCard from "./DataCard";
import AddSourceModal from './AddSourceModal.js';
import AddSourceButton from "./AddSourceButton";
import { useState, useEffect } from "react";
import { getData } from "../services/api.js";

export default function DataSources() {
  const [data, setData] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    getData().then((result) => {
      setData(result.sources);
    });
  }, []);

  const handleAddSource = () => {
    setIsButtonClicked(true);
  }

  const handleCloseModal = () => {
    setIsButtonClicked(false);
  }

  console.log(data);

  // {sources: [{type, name, connection}, {}, {}]}
  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100 h-screen">
        <Navbar name="Data Sources" />
        {/* {data.map((source, idx) => {
          return (
            <DataCard key={idx} name={source.name} type={source.type} connection={ } connectionDetails={source.connection.connectionString} />
          )
        })} */}
        {/* {graphqlSources
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
          : null} */}

        {isButtonClicked ? <AddSourceModal onModalClose={handleCloseModal} /> : null}
        <AddSourceButton onAddSource={handleAddSource} />
      </div>
    </>
  );
}
