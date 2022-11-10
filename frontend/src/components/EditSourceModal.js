import React from "react";
import { useState } from "react";

const EditSourceModal = ({ onEditClose, onEditSource, sourceObj }) => {
  const [name, setName] = useState({
    name: sourceObj.name,
    newName: sourceObj.name,
  });
  const [connection, setConnection] = useState(sourceObj.connectionDetails);

  const handleName = (event) => {
    event.preventDefault();
    setName({ ...name, newName: event.target.value });
  };

  const handleConnection = (event) => {
    event.preventDefault();
    setConnection(event.target.value);
  };
  const handleCloseModal = () => {
    onEditClose();
  };

  const handleEditSource = () => {
    onEditSource({ ...name, connection });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Data Source</h3>
            </div>

            <form>
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Enter a new name for this data source:
                </p>

                <div className="mb-3 pt-0">
                  <input
                    value={name.newName}
                    onChange={handleName}
                    type="text"
                    className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
                </div>

                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Enter your new connection details:
                </p>
                <div className="mb-3 pt-0">
                  <input
                    value={connection}
                    onChange={handleConnection}
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
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default EditSourceModal;
