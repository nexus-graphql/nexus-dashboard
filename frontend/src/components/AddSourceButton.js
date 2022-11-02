import Form from "./AddSourceModal";
import { useState } from 'react';

const AddSourceButton = ({ onAddSource }) => {
  const handleAddSource = () => {
    onAddSource();
  }

  return (
    <div className="relative w-full pt-12 px-4 max-w-full flex-grow flex-1 text-center">
      <button
        className="bg-indigo-500 text-white active:bg-indigo-600 text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={handleAddSource}
      >
        Add Data Source
      </button>
    </div>
  )
}

export default AddSourceButton

/*
1. Create Modal Component
2. Hard code Modal component into Data Sources
*/

/*
  - when the user clicks the 'add source button'
    - show form that asks 'what type of data source would you like to add?'
  - when the user picks one of the 3 data sources
    - show a second form that asks the name and connection for data source
  - when user presses enter
    - make forms disappear and show the added data source to main page
*/