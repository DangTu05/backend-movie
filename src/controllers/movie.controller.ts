import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import MovieService from "../services/movie.service";
import sendResponse from "../utils/handlers/response.handler";
import handleAsyncErrors from "../utils/handlers/error.handler";
class MovieController {
  constructor() {
    this.createFilm = handleAsyncErrors(this.createFilm.bind(this));
    this.getFilmTrending = handleAsyncErrors(this.getFilmTrending.bind(this));
  }
  async createFilm(req: Request, res: Response) {
    await MovieService.createFilm(req.body);
    sendResponse(res, StatusCodes.CREATED, null, "Film created successfully");
  }
  async getFilmTrending(req: Request, res: Response) {
    const films = await MovieService.getFilmTrending();
    sendResponse(res, StatusCodes.OK, films, "Get film trending successfully");
  }
}
export default new MovieController();
