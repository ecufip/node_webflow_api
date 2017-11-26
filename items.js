const Webflow = require('webflow-api');
 
// Initialize the API 
const webflow = new Webflow({ token: 'insert token' });

const items = webflow.items({ collectionId: 'insert id' }, { limit: 2 });

items.then(i => console.log(i));