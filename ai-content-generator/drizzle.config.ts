/** @type {import('drizzle-kit').Config} */

// export default {
//   dialect: "postgresql",
//   schema: "./utils/schema.tsx",
//   dbCredentials:{
//     url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL
//   }
// };

export default {
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  dbCredentials:{
    // url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL
    url : "postgresql://AI_Content-Generator_owner:npg_pOAn5m7VvuLZ@ep-round-breeze-a5a012au-pooler.us-east-2.aws.neon.tech/AI_Content-Generator?sslmode=require"
  }
};
