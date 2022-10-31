import Sidebar from "./Sidebar"

const Graphiql = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 h-screen">
        <iframe title="GraphiQL" width="100%" height="100%" src="http://localhost:5000/graphql"></iframe>
      </div>
    </>
  )
}

export default Graphiql