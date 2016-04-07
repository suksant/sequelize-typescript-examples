[![Build Status](https://travis-ci.org/suksant/sequelize-typescript-examples.svg?branch=master)](https://travis-ci.org/suksant/sequelize-typescript-examples)

# Sequelize TypeScript Examples

This repository demonstrates examples of using Sequelize in TypeScript projects. Although I try to keep the code clean with consistent conventions, it is by no means considered as best practice. The implemented logic focuses around how to enhance the experience of using Sequelize in TypeScript projects.

## Setup

Configure your database parameters in `configs/database-config.ts`. You must configure `username`, `password` and `database` (database name). Other parameters can be adjusted as required.

Install all required dependencies:
```
npm install
```

> Note: If `tsconfig.json` is overridden before the above command is executed, the compilation may fail.

Run the project example you want:
```
npm start -- --example="sequelize-express"
```

The above command will run the example from `build/sequelize-express`.

Perform CRUD operations to test it. To get a list of products, for example, run:
```
curl -X GET http://localhost:3000/api/products
```

For simplicity, the `configs` are shared between different example projects.

If you change the configurations, you will need to run `npm run compile` for it to take effect.

If you want to clean the build, run `npm run clean` or `gulp clean` if you have gulp installed globally.

## Test
```
npm test
```
