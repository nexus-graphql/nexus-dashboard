const DataCard = ({
  name,
  type,
  connection,
  connectionDetails,
  onRemoveSource,
  onEditSource,
}) => {
  const handleRemoveSource = (e) => {
    onRemoveSource({ name });
  };

  const handleEditSource = () => {
    onEditSource({ type, name, connectionDetails });
  };

  return (
    <>
      <div className="relative bg-white-600 md:pt-30 pb-10 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap justify-center mt-4">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-2 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700 text-lg">
                        {name}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Data Source Type
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          {connection}
                        </th>

                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                          <button
                            onClick={handleEditSource}
                            className="bg-green-500 text-white active:bg-indigo-600 text-lg font-bold uppercase px-6 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                          >
                            Edit
                          </button>
                        </div>

                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                          <button
                            onClick={handleRemoveSource}
                            className="bg-pink-600 text-white active:bg-indigo-600 text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                          >
                            Remove
                          </button>
                        </div>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">
                          {type}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                          {connectionDetails}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataCard;
