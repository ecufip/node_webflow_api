2 simple node scripts for connecting with webflow using the API_KEY

## To use: ##

1. Get webflow API key: in your Webflow account go to 'Project settings' then 'Integrations' then 'Generate new API key'
2. Input your API/ details into the necessary files.
3. Install :

        $ npm install

4. Sites.js returns a json of all sites using the API key and can show you site _ids. To run:

        $ node sites.js

5. Details.js returns a json containing details of a specific site using the site id. To run, input the site id into details.js then:

        $ node details.js

6. Collections.js returns a json containing details of collections using the API token and site id. To run, input the API token and site id into collections.js then:

        $ node collections.js
        
 
7. Items.js returns a json containing items in a collections using the API token and collection id. To run, input the API token and collection id into items.js then:

        $ node items.js
