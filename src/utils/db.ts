import * as dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();

class Database {
  public pool: Pool = new Pool({ connectionString: process.env.DATABASE_URL });

  constructor() {
    this.db();
  }
  db() {
    return this.pool;
  }
}
const db = new Database().db();
export default db;
