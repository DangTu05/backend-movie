import movieSchema from "../models/movie.model";

const createFilm = async (data: movieSchema): Promise<void> => {
  const film = new movieSchema(data);
  await film.save();
};
const getFilmTrending = async (): Promise<movieSchema[]> => {
  const films = await movieSchema.find({ vote_average: { $gte: 6.5 } });
  return films;
};
const movieService = {
  createFilm,
  getFilmTrending
};
export default movieService;
