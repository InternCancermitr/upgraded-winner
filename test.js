const axios = require('axios');

async function sendRequest(url) {
  try {
    const response = await axios.get(url);
    console.log(`Request to ${url} completed with status ${response.status}`);
  } catch (error) {
    console.error(`Error while making request to ${url}: ${error.message}`);
  }
}

async function runRequests(url, count) {
  const requests = [];
  
  for (let i = 0; i < count; i++) {
    requests.push(sendRequest(url));
  }

  try {
    await Promise.all(requests);
    console.log(`All ${count} requests completed successfully.`);
  } catch (error) {
    console.error(`Error while running requests: ${error.message}`);
  }
}

const url = 'https://www.cancermitr.com/symptom-tracker'; // Replace with your desired URL
const count = 3000;

runRequests(url, count);
