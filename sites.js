const Webflow = require('webflow-api');
 
// Initialize the API 
const api = new Webflow({ token: 'your API key' });

// Promise <[ Site ]>
const sites = api.sites();

sites.then(s => console.log(s));