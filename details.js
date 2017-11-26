const Webflow = require('webflow-api');
 
// Initialize the API 
const api = new Webflow({ token: 'insert token' });
 
// Fetch a site 
api.site({ siteId: 'insert id' }).then(site => console.log(site));