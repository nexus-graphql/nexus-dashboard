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
} from "../services/api.js";

export default function DataSources() {
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
    handleCloseModal();
  };

  const handleSaveEditSource = async (dataSourceObj) => {
    let response = await submitEditDataSource(dataSourceObj);
    setData(response.sources);
    handleCloseEditModal();
  };

  const handleRemoveSource = async (nameObj) => {
    let response = await deleteDataSource(nameObj);
    setData(response.sources);
  };

  const handleEditSource = (sourceObj) => {
    setIsEditClicked(true);
    setEditSourceObj(sourceObj);
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
            onEditSource={handleSaveEditSource}
            onEditClose={handleCloseEditModal}
            sourceObj={editSourceObj}
          />
        ) : null}
        <AddSourceButton onAddSource={handleAddSource} />
      </div>
    </>
  );
}
