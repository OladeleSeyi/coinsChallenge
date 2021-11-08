### Buycoins Challenge

This is a simple solution to the [Buycoins Challenge](https://helicarrier.notion.site/Challenges-2bc2af7c0004467b8d3461e41ecb89dd)

This Project extends the serverless stack Node Js Starter and GraphQL yoga and is hosted on AWS.

### Running The Server Locally

This solution is heavily dependent on Serverless. As such you would have to have it installed on your machine to begin.

`npm install serverless -g`

Clone the repo and run `npm i`

Then run `serverless offline start` to begin.

Per instructions you can find the Playground interface at the `localhost:3000/graphiql`

### Limitations

- This solution implements calculatePrice (and its helper functions ) in the Query directory. Ideally, this should be separated into its own directory as a module.
