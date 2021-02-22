# use osm-editor-database.sql file in /db to setup database

# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

#production build
navigate to /frontend_app directory and than run command npm run build
open localhost:5000/map/pois in browser