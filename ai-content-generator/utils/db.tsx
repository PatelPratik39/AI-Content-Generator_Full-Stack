// @ts-ignore
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);
const db = drizzle(sql);
