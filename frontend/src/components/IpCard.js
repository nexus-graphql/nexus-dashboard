const IpCard = ({ ip }) => {
  return (
    <>
      <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 className="text-blueGray-400 uppercase font-bold text-lg">
                  API Endpoint
                </h5>
              </div>
              <div className="relative w-auto pl-4 flex-initial">
                <div className="text-white p- text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-indigo-500">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
            <p className="text-sm text-blueGray-400 mt-4 text-lg">
              <span className="text-indigo-500 mr-2">
                <i className="fas fa-chevron-right"></i> IP:
              </span>
              <span className="whitespace-nowrap">
                {ip ? `${ip}:4000/graphql` : "No Endpoint"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IpCard;
