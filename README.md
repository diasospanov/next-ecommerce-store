## Title

An online store for NFTs.

## About

A Next.js Fullstack E-commerce Project. Part of a Web Development Bootcamp.

## Used Technologies

- Javascript;
- Typescript;
- PostgresQL;
- Unit testing in Jest;
- E2E testing with Playwright;
- Deployment on fly.io

## Deploy on Fly.io

1. Sign up on Fly.io
2. On the Fly.io Tokens page, generate a new Fly.io access token named GitHub Actions Deploy Token
3. In your GitHub repo under Settings → Secrets → Actions, click the New repository secret and create a new token with the name FLY_API_TOKEN
4. On the command line, open the Fly.io login page: flyctl auth login. Login.
5. Create an app, specifying the name: flyctl apps create --name <app name>
6. Create (Upleveled's) Fly.io config
7. Change your database/connect.ts as in the lecture: only run config() from dotenv-safe if the FLY_IO environment variable is not set
8. Change your next.config.js as per Upleveled's instructions.
9. Add database credentials using Fly.io secrets: flyctl secrets set PGHOST=localhost PGDATABASE=upleveled$(openssl rand -hex 16) PGUSERNAME=upleveled$(openssl rand -hex 16) PGPASSWORD=$(openssl rand -base64 32)
10. If your app needs any additional environment variables such as API keys, also add them to the secrets: flyctl secrets set <secret name>=<secret value>
11. If you absolutely need to set a NEXT*PUBLIC* environment variable, you can add it to your .env.production file.
12. Create a 1GB volume for the PostgreSQL database: flyctl volumes create postgres --size 1 --region fra
13. Deploy: flyctl deploy
