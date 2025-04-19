import express, { Router } from "express";
import MovieController from "../controllers/movie.controller";
import multer from "multer";
import { uploadCloud } from "../middlewares/upload.middleware";
const upload = multer();
const router: Router = express.Router();
router
  .post(
    "/create",
    upload.fields([
      { name: "poster_path", maxCount: 1 },
      { name: "backdrop_path", maxCount: 1 }
    ]),
    uploadCloud,
    MovieController.createFilm
  )
  .get("/trending/all/day", MovieController.getFilmTrending);
export default router;
