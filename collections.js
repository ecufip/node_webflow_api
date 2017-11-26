const Webflow = require('webflow-api');
 
// Initialize the API 
const webflow = new Webflow({ token: 'insert token' });

// Promise <[ Collection ]>
const collections = webflow.collections({ siteId: 'insert id' });

collections.then(c => console.log(c));
