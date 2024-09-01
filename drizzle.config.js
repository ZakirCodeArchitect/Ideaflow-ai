/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AIContentDB_owner:zvT57pgLlnkY@ep-restless-band-a52aef8b.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
  };