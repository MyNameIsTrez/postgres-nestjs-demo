# postgres-nestjs-demo

## Running

Start the containers with

`make`

And every time you visit the website, you'll get a number that is incremented by 1 in postgres every time:

`curl localhost:3000`

## Regenerating containers/nestjs

`cd containers/nestjs`
`npx @nestjs/cli new .`
`npm install @nestjs/typeorm typeorm pg`
