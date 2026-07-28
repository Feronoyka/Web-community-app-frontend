## Description

This community made with Nextjs, Reactjs, TailwindCSS, Zod, Zustand, Axios, Socket.io

## Lighthouse result

<img width="1918" height="698" alt="Screenshot 2026-07-28 234212" src="https://github.com/user-attachments/assets/ec182305-e240-459f-a427-152b282cb39c" />

## Figma design

[Figma design of Ventus forum](https://www.figma.com/design/w44lceCNMrJ1p4hSb5YcJp/Web-community-app?node-id=0-1&p=f)

[Main component of design](https://www.figma.com/design/w44lceCNMrJ1p4hSb5YcJp/Web-community-app?node-id=7-8&t=XFUZREJJcCfeKty3-1)

## Install depencies

```bash
npm install
```

## Getting Started

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

## Run Docker

```bash
docker compose up
```

## **Deploy on Vercel**

The easiest way to deploy your Next.js app is to use the ++[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)++ from the creators of Next.js.

Check out our ++[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)++ for more details.
