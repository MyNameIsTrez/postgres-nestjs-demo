FROM node

# Install dependencies to node_modules,
# referring to package.json and package-lock.json
COPY package.json package-lock.json /nestjs/
RUN npm ci --prefix=/nestjs

COPY .eslintrc.js .gitignore .prettierrc nest-cli.json tsconfig.build.json tsconfig.json /nestjs/

COPY src/ /nestjs/src/

# "exec" fixes relying on the "docker compose down" timeout to kill this container
CMD [ "exec", "npm", "run", "start:dev", "--prefix=nestjs" ]
