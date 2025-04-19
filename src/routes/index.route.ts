import { Application } from "express";
import movieRoutes from "./movie.route";
function router(app: Application): void {
  app.use("/api.themoviedb.org/3", movieRoutes);
}
export default router;
