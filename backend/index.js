const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (request, response) => {
  response.send('Nexus Backend')
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

/*
What data does frontend need from backend?
Deployment:
- if there is a deployment:
  - status
  - public api endpoint
  - destroy
    - follow what command line does
- else
  - Message: You don't have any deployed projects.
  - Would you like to build and deploy a project? <button>
*/