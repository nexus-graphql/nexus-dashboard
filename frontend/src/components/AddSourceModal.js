import React from "react";
import { useState } from 'react';

const Modal = ({ onModalClose }) => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [connection, setConnection] = useState('');

  const handleType = event => {
    event.preventDefault();
    setType(event.target.value);
  }

  const handleName = event => {
    event.preventDefault();
    setName(event.target.value);
  }

  const handleConnection = event => {
    event.preventDefault();
    setConnection(event.target.value);
  }
  const handleCloseModal = () => {
    onModalClose();
  }

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                New Data Source Details
              </h3>
            </div>

            <form>
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  What type of data source would you like to add?
                </p>
                <input value={type} onChange={handleType} placeholder="Postgres, GraphQL or OpenAPI" />

                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Enter a name for this data source:
                </p>
                <input value={name} onChange={handleName} />

                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Enter your connection details:
                </p>
                <input value={connection} onChange={handleConnection} />
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
}

export default Modal

/*
What type of data source would you like to add?
- dropdown menu of 3 choices
  - postgres
  - graphql
  - openAPI

Enter your data source name:
- mypostgresdb

Enter your connection details:
- For postgres, enter your connection string
- For graphql, enter your API endpoint
- For openAPI, enter your source
*/

// type
// name
// connection