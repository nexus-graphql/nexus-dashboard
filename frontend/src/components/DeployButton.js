import { deploy, redeploy } from "../services/api.js";

const DeployButton = ({ type, onLocalChanges, onDeploy, onRedeploy }) => {
  const handleDeploy = () => {
    if (window.confirm("Are you sure you want to deploy?")) {
      deploy();
      onLocalChanges(false);
      onDeploy();
    }
  };

  const handleRedeploy = () => {
    if (window.confirm("Are you sure you want to re-deploy?")) {
      redeploy();
      onLocalChanges(false);
      onRedeploy();
    }
  };

  const selectButton = () => {
    if (type === "deploy-enabled") {
      return (
        <button
          className="bg-indigo-600 text-white active:bg-indigo-600 text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={handleDeploy}
        >
          Deploy
        </button>
      );
    } else if (type === "deploy-disabled") {
      return (
        <button
          className="bg-blueGray-400 text-white text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
          type="button"
          disabled
        >
          Deploy
        </button>
      );
    } else if (type === "redeploy-enabled") {
      return (
        <button
          className="bg-pink-600 text-white active:bg-indigo-600 text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={handleRedeploy}
        >
          Redeploy
        </button>
      );
    } else if (type === "redeploy-disabled") {
      return (
        <button
          className="bg-blueGray-400 text-white text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
          type="button"
          disabled
        >
          No Local Changes
        </button>
      );
    } else if (type === "deploying") {
      return (
        <button
          className="bg-blueGray-400 text-white text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
          type="button"
          disabled
        >
          deployment in progress...
        </button>
      );
    } else if (type === "destroying") {
      return (
        <button
          className="bg-blueGray-400 text-white text-lg font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
          type="button"
          disabled
        >
          tearing down infrastructure...
        </button>
      );
    }
  };

  return (
    <div className="relative w-full pt-12 px-4 max-w-full flex-grow flex-1 text-center">
      {selectButton()}
    </div>
  );
};

export default DeployButton;
