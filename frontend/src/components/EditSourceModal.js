import React from "react";
import { useState } from "react";

const EditSourceModal = ({
  onEditClose,
  onEditSource,
  sourceObj,
  schemaData,
}) => {
  const [source, setSource] = useState("");
  const [newFieldType, setNewFieldType] = useState("");
  const [extendTypeField, setExtendTypeField] = useState("");
  const [extendType, setExtendType] = useState("");
  const [newField, setNewField] = useState("");
  const [filterField, setFilterField] = useState("");

  const handleNewField = (event) => {
    event.preventDefault();
    setNewField(event.target.value);
  };
  const handleCloseModal = () => {
    onEditClose();
  };

  const handleEditSource = () => {
    onEditSource({
      source,
      newFieldType,
      extendTypeField,
      extendType,
      newField,
      filterField,
    });
  };

  const getOtherSources = () => {
    return Object.keys(schemaData).filter((sourceName) => {
      return sourceName !== sourceObj.name;
    });
  };

  const getTypesFromSource = () => {
    if (source) {
      return Object.keys(schemaData[source]);
    }
    return [];
  };

  const getFieldsFromExtendType = () => {
    if (extendType) {
      return schemaData[sourceObj.name][extendType];
    }
    return [];
  };

  const getFieldsFromNewFieldType = () => {
    if (newFieldType) {
      return schemaData[source][newFieldType];
    }
    return [];
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h2 className="text-3xl font-semibold block">
                Editing {sourceObj.name}
              </h2>
            </div>
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold">
                Link Types Across Data Sources
              </h3>
            </div>
            {Object.keys(schemaData).length !== 0 ? (
              <form>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Select a type to modify:
                  </p>

                  <div className="mb-3 pt-0">
                    <select
                      value={extendType}
                      onChange={(e) => setExtendType(e.target.value)}
                      className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    >
                      <option default></option>
                      {Object.keys(schemaData[sourceObj.name]).map(
                        (type, idx) => {
                          return <option key={idx}>{type}</option>;
                        }
                      )}
                    </select>
                  </div>

                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Which field links to your other data source?
                  </p>

                  <div className="mb-3 pt-0">
                    <select
                      value={extendTypeField}
                      onChange={(e) => setExtendTypeField(e.target.value)}
                      className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    >
                      <option default></option>
                      {getFieldsFromExtendType().map((field, idx) => {
                        return (
                          <option value={field} key={idx}>
                            {extendType}.{field}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Select a source to link:
                  </p>

                  <div className="mb-3 pt-0">
                    <select
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                      className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    >
                      <option default></option>
                      {getOtherSources().map((source, idx) => {
                        return <option key={idx}>{source}</option>;
                      })}
                    </select>
                  </div>

                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Select a type from that source:
                  </p>

                  <div className="mb-3 pt-0">
                    <select
                      value={newFieldType}
                      onChange={(e) => setNewFieldType(e.target.value)}
                      className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    >
                      <option default></option>
                      {getTypesFromSource().map((type, idx) => {
                        return <option key={idx}>{type}</option>;
                      })}
                    </select>
                  </div>

                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Which field links to the origin data source?
                  </p>

                  <div className="mb-3 pt-0">
                    <select
                      value={filterField}
                      onChange={(e) => setFilterField(e.target.value)}
                      className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    >
                      <option default></option>
                      {getFieldsFromNewFieldType().map((field, idx) => {
                        return (
                          <option value={field} key={idx}>
                            {newFieldType}.{field}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Enter a name for the new field:
                  </p>
                  <div className="mb-3 pt-0">
                    <input
                      value={newField}
                      onChange={handleNewField}
                      type="text"
                      className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>

                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleEditSource}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : null}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default EditSourceModal;
