#! /usr/bin/env node

import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  username VARCHAR ( 255 ),
  added TIMESTAMP
);

INSERT INTO messages (text, username, added)
VALUES
  ('Hi there!', 'Amando', CURRENT_TIMESTAMP),
  ('Hello World!', 'Charles', CURRENT_TIMESTAMP)
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@dpg-d7kbqp9kh4rs73b11p10-a.oregon-postgres.render.com/mini_msg_board_db_l1we?ssl=true`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();