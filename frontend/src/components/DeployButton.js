const DeployButton = ({ type }) => {
  const selectButton = () => {
    if (type === 'deploy-enabled') {
      return (
        <button
          className="bg-indigo-600 text-white active:bg-indigo-600 text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => alert('Deploy')}
        >
          Deploy
        </button>
      )
    } else if (type === 'deploy-disabled') {
      return (
        <button
          className="bg-blueGray-400 text-white text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
          type="button"
          disabled
        >
          Deploy
        </button>
      )
    } else if (type === 'redeploy-enabled') {
      return (
        <button
          className="bg-pink-600 text-white active:bg-indigo-600 text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => alert('Deploy')}
        >
          Redeploy
        </button>
      )
    } else if (type === 'redeploy-disabled') {
      return (
        <button
          className="bg-blueGray-400 text-white text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
          type="button"
          disabled
        >
          No Local Changes
        </button>
      )
    }
  }

  return (
    <div className="relative w-full pt-12 px-4 max-w-full flex-grow flex-1 text-center">
      {selectButton()}
    </div>
  )
}

export default DeployButton

/*
4 States

1. If no deployments
   - show deploy button
2. If deployment
   - gray out redeploy button
3. If changes to data sources - remove, add, edit
   - show redeploy button
4. If loading (initial state)
   - gray out redeploy button
*/

/*
- figure way to track active changes
- in env file, have a 'Local Changes' to true
- when user makes a change to data source
  - change 'Changes' to false
*/

// types
//   - deploy enabled
//     - deploy disabled

//       - redeploy enabled
//         - redeploy disabled 
