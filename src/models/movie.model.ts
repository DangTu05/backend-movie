import mongoose from "mongoose";
const Schema = mongoose.Schema;
const movie = new Schema(
  {
    adult: Boolean,
    backdrop_path: String,
    genre_ids: [Number],
    media_type: {
      type: String,
      required: [true, "Media type is required"],
      enum: {
        values: ["movie", "tv"],
        message: "Vui lòng chọn movie hoặc tv"
      }
    },
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    poster_path: String,
    release_date: {
      type: Date,
      required: [true, "Release date is required"]
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true
    },
    video: Boolean,
    vote_average: Number,
    vote_count: Number
  },
  {
    timestamps: true
  }
);
export default mongoose.model("Movie", movie);
