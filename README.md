# OneTrue Monorepo

This repository contains web apps (Next.js), backend services (API Gateway + Lambda), shared infrastructure (CDK), contracts (OpenAPI), and developer tooling for local and AWS deployments.

## Quickstart (local)
```bash
corepack enable && pnpm i

# start local data services
docker compose -f tooling/local/docker-compose.yml up -d

# run authenticator API locally
cd services/api/authenticator-api
sam build && sam local start-api --port 3001

# run web app (authenticator)
cd apps/authenticator
pnpm dev
```

## Deploy (AWS)
- Deploy shared infra via CDK under `services/infra/cdk`.
- Deploy each API stack under `services/api/*/cdk`.
- Connect `apps/*` to AWS Amplify; use `amplify.yml` provided in each app folder.
