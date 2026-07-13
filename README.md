# Install depencies

```
npm install
```

# Getting Started

First, run the web-community-app-server in dev, uou can see in README of web-community-app-server and by default nestjs uses port 3000

Second, after running the server run the nestjs in development mode:

NextJs auto run on available port to 3001 as port 3000 already taken

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Possible problem

if you got a error with turbopack like `FATAL: An unexpected Turbopack error occurred.`

Delete `.next` folder and then run `npm run dev`
