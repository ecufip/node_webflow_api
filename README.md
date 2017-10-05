2 simple node scripts for connecting with webflow using the API_KEY

## To use: ##

1. Get webflow API key: in your Webflow account go to 'Project settings' then 'Integrations' then 'Generate new API key'
2. Input your API into both the details.js and sites.js files
3. Install package via NPM (could include in package.json file instead):
    
        $ npm install --save webflow-api

4. Sites.js shows the details of all sites using the API key and can show you site _ids. To run:

        $ node sites.js

5. Details.js shows details of a specific site using the site id. To run, input the site id then:

        $ node details.js
