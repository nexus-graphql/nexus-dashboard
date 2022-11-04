const { exec } = require("child_process");
const userDirectory = process.argv[2];

const deploy = () => {
  exec("nexus deploy autoValidate", { cwd: userDirectory });
};

const redeploy = () => {
  exec("nexus redeploy autoValidate", { cwd: userDirectory });
};

const destroy = () => {
  exec("nexus destroy autoValidate", { cwd: userDirectory });
};

module.exports = {
  deploy,
  redeploy,
  destroy,
};
