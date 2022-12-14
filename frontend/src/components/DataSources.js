import React from "react";
import Navbar from "./Navbar";
import DataCard from "./DataCard";
import AddSourceModal from "./AddSourceModal.js";
import AddSourceButton from "./AddSourceButton";
import EditSourceModal from "./EditSourceModal";
import { useState, useEffect } from "react";
import {
  deleteDataSource,
  getData,
  submitDataSource,
  submitEditDataSource,
  deleteFieldConnection,
} from "../services/api.js";

export default function DataSources({
  onLocalChanges,
  schemaData,
  fieldConnections,
  setFieldConnections,
}) {
  const [data, setData] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [editSourceObj, setEditSourceObj] = useState({});

  useEffect(() => {
    getData().then((result) => {
      setData(result.sources);
    });
  }, []);

  const handleAddSource = () => {
    setIsButtonClicked(true);
  };

  const handleCloseModal = () => {
    setIsButtonClicked(false);
  };

  const handleCloseEditModal = () => {
    setIsEditClicked(false);
    setEditSourceObj({});
  };

  const handleSaveChanges = async (dataSourceObj) => {
    let response = await submitDataSource(dataSourceObj);
    setData(response.sources);
    onLocalChanges(true);
    handleCloseModal();
  };

  const handleSaveEditSource = async (dataSourceObj) => {
    const response = await submitEditDataSource(dataSourceObj);
    onLocalChanges(true);
    handleCloseEditModal();
    setFieldConnections(response);
  };

  const handleRemoveSource = async (nameObj) => {
    let response = await deleteDataSource(nameObj);
    onLocalChanges(true);
    setData(response.sources);
  };

  const handleEditSource = (sourceObj) => {
    setIsEditClicked(true);
    setEditSourceObj(sourceObj);
  };

  const handleDeleteFieldConnection = async (id) => {
    const response = await deleteFieldConnection(id);
    onLocalChanges(true);
    setFieldConnections(response);
  };

  let connections = {
    postgres: "Connection String",
    rest: "Source",
    graphql: "Endpoint",
  };

  return (
    <>
      <div className="relative md:ml-64 bg-blueGray-100 h-screen">
        <Navbar name="Data Sources" />
        {data.map((source, idx) => {
          return (
            <DataCard
              onEditSource={handleEditSource}
              onRemoveSource={handleRemoveSource}
              key={idx}
              name={source.name}
              type={source.type}
              connection={connections[source.type]}
              connectionDetails={source.connection}
            />
          );
        })}
        {isButtonClicked ? (
          <AddSourceModal
            onModalClose={handleCloseModal}
            onSaveChanges={handleSaveChanges}
          />
        ) : null}
        {isEditClicked ? (
          <EditSourceModal
            schemaData={schemaData}
            onEditSource={handleSaveEditSource}
            onEditClose={handleCloseEditModal}
            sourceObj={editSourceObj}
            fieldConnections={fieldConnections[editSourceObj.name]}
            onDeleteFieldConnection={handleDeleteFieldConnection}
          />
        ) : null}
        <AddSourceButton onAddSource={handleAddSource} />
      </div>
    </>
  );
}
