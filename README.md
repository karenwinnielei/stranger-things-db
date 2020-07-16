# stranger-things-db

### Dependencies

- express
- helmet
- morgan
- knex
- sqlite3
- cors
- nodemon (dev dependency)
- dotenv

Team build project
steps:
- npx gitignore node
- npm init -y
- go to package.json and change 
  "scripts": {
    "start": "node index.js"
  },
- touch index.js
- mkdir database api auth
- npm i -D nodemon
- npm i express helmet morgan knex sqlite3 cors dotenv
- check and make sure that the .gitignore has dotenv in there
- go to package.json and add `"stranger": "nodemon index.js"` to scripts ('stranger' is a banana, but typically it would be 'server')
- knex init (creates knexfile)
- go to knexfile and change it to look like this
    development: {
    client: 'sqlite3',
    connection: {
      filename: './database/things.db3'
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },
  - touch api/server.js
  - mkdir config
  - touch config/dependencies.js
  - make sure helmet is working (test this by looking at the headers section -> if it says express in there and only has 6-7: not working, if express is missing and 12-13: working)
  - touch auth/characterRouter.js