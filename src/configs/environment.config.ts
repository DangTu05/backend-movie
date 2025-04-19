import dotenv from "dotenv";
dotenv.config();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const env: any = {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT,
  CLOUD_NAME: process.env.CLOUD_NAME,
  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_SECRET,
  // DATABASE_NAME: process.env.DATABASE_NAME,
  /// Khi chạy lện script thì biến này tự được nạp vào process.env
  BUILD_MODE: process.env.BUILD_MODE
};
export default env;
