# GraphQL Practice

## Added and Changed Skills

- Javascript -> Typescript
- MongoDB (mLab) -> PostgreSQL (ElephantSQL)
- Mongoose -> Knex
- DataLoader

## Memos

### Knex for Typescript

1. Generate Migration File
   `knex migrate:make --knexfile knexfile.ts -x ts <migration-name>`
2. Run Migration File
   `knex migrate:latest --knexfile knexfile.ts`
3. Generate seed File
   `knex seed:make --knexfile knexfile.ts -x ts <seed-name>`
4. Run seed File
   `knex seed:run --knexfile knexfile.ts`

## Refs

- Base project idea from tutorial by The Net Ninja [YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f)

- ElephantSQL and Knex [dev.to](https://dev.to/easybuoy/setting-up-a-node-api-with-postgres-and-knex-588f)

- N+1 Problem by Ben Awad
  - [DataLoader and database joins](https://github.com/benawad/graphql-n-plus-one-example)
  - [DataLoader with Typescript](https://github.com/benawad/fullstack-graphql-airbnb-clone/tree/45_dataloader)
