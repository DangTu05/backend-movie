/* eslint-disable no-console */
import express from "express";
import { Server } from "http";
import cors from "cors";
import env from "./configs/environment.config";
import { connect, close } from "./configs/mongodb.config";
import router from "./routes/index.route";
import { errorHandlingMiddleware } from "./middlewares/errorHandling.middleware";
import exitHook from "async-exit-hook";
const app: express = express();
const port: number | string = env.PORT || 5000;
const startServer = (): Server => {
  app.use(express.json()); // Xử lý dữ liệu JSON
  app.use(express.urlencoded({ extended: true })); // Xử lý dữ liệu URL-encoded
  app.use(cors());
  router(app); // Kết nối router
  app.use(errorHandlingMiddleware); // Middleware xử lý lỗi
  return app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};
(async (): Promise<void> => {
  try {
    console.log("Connecting to database...");
    await connect();
    startServer();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
exitHook(async () => {
  close();
  console.log("disconnect successfully!!!");
});
