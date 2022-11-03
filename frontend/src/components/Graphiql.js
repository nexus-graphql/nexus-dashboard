import Sidebar from "./Sidebar";

const Graphiql = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 h-screen">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <h1 class="text-indigo text-2xl uppercase hidden lg:inline-block font-semibold">
            Local Development Server
          </h1>
        </div>
        <iframe
          title="GraphiQL"
          width="100%"
          height="100%"
          src="http://localhost:4000/graphql"
        ></iframe>
      </div>
    </>
  );
};

export default Graphiql;
