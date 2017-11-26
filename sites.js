const Webflow = require('webflow-api');
 
// Initialize the API 
const api = new Webflow({ token: 'insert token' });

// Promise <[ Site ]>
const sites = api.sites();

sites.then(s => console.log(s));