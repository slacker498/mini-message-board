import { Pool } from "pg";

const pool = new Pool({
  connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@dpg-d7kbqp9kh4rs73b11p10-a.oregon-postgres.render.com/mini_msg_board_db_l1we?ssl=true`
});

export default pool;