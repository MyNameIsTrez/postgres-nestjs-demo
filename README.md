# postgres-nestjs-demo

## Running

Start the containers with

`make`

And every time you visit the website, you'll get a number that is incremented by 1 in postgres every time:

`curl localhost:3000`

## Running locally

1. Check if postgres is running with `ps aux | grep postgres`
2. Start the postgres server with `sudo systemctl start postgresql`
3. Connect to the postgres server with `sudo -u postgres psql`
4. Stop the postgres server with `sudo systemctl stop postgresql`
5. Connect to the container's postgres with `psql -h localhost -U postgres`

## Regenerating containers/nestjs

`cd containers/nestjs`
`npx @nestjs/cli new .`
`npm install @nestjs/typeorm typeorm pg`
