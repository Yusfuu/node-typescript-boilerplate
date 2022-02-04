export const configs = {
  isProduction: process.env.NODE_ENV === 'production',
  database: process.env.DATABASE_URL as string,
}