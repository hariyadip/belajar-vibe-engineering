import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

let pool: mysql.Pool | null = null;

function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL || "mysql://root:password@localhost:3306/vibe_db";
    pool = mysql.createPool(connectionString).promise();
  }
  return pool;
}

export const db = drizzle(getPool(), { schema });

export async function closeDB() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}