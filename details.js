const Webflow = require('webflow-api');
 
// Initialize the API 
const api = new Webflow({ token: 'your API key' });
 
// Fetch a site 
api.site({ siteId: 'your site id' }).then(site => console.log(site));