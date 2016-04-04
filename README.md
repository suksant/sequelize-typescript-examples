# Sequelize TypeScript Examples

This repository demonstrates examples of using Sequelize in TypeScript projects. Although I try to keep the code clean with consistent conventions, it is by no means considered as best practice. The implemented logic focuses around how to enhance the experience of using Sequelize in TypeScript projects.

## Setup

Install all required dependencies:
```
npm install
```

Configure your database parameters in `configs/database-config.ts`. You must configure `username`, `password` and `database` (database name). Other parameters can be adjusted as required.

Compile and run the project example you want:
```
npm start -- --example="sequelize-express"
```
The above command will compile and run an express server for the example in `sequelize-express` folder into the `build` folder.

Perform CRUD operations to test it. To get a list of products, for example, run:
```
curl -X GET http://localhost:3000/api/products
```

> Note: For simplicity, the `configs` are shared between different example projects.

If you want to clean the build, run `npm run clean` or `gulp clean` if you have gulp installed globally.

## Test
Currently, there is no test whatsoever. Please feel free to make a PR.
