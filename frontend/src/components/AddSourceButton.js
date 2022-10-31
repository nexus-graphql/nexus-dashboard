const AddSourceButton = () => {
  return (
    <div className="relative w-full pt-12 px-4 max-w-full flex-grow flex-1 text-center">
      <button
        className="bg-indigo-500 text-white active:bg-indigo-600 text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
      >
        Add Data Source
      </button>
    </div>
  )
}

export default AddSourceButton