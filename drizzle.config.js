export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://neondb_owner:Bpr7mwgPa8kL@ep-withered-grass-a5wcbz5l.us-east-2.aws.neon.tech/neondb?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:Bpr7mwgPa8kL@ep-withered-grass-a5wcbz5l.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
