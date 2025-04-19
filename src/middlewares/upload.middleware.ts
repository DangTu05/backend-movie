/* eslint-disable no-console */
import { Request, Response, NextFunction } from "express";
import { v2 as cloudinary } from "cloudinary";
import env from "../configs/environment.config";
cloudinary.config({
  cloud_name: env.CLOUD_NAME,
  api_key: env.API_KEY,
  api_secret: env.API_SECRET // Click 'View API Keys' above to copy your API secret
});
export const uploadCloud = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const files = req.files as {
      [fieldname: string]: Express.Multer.File[];
    };

    if (!files || (!files.poster_path && !files.backdrop_path)) {
      next();
      return;
    }
    const uploadImage = (file: Express.Multer.File): Promise<string> => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ resource_type: "auto" }, (error, result) => {
            if (error || !result) {
              console.error("Upload error:", error);
              return reject(error);
            }
            resolve(result.secure_url);
          })
          .end(file.buffer);
      });
    };

    if (files.poster_path?.[0]) {
      req.body.poster_path = await uploadImage(files.poster_path[0]);
    }

    if (files.backdrop_path?.[0]) {
      req.body.backdrop_path = await uploadImage(files.backdrop_path[0]);
    }

    next();
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Image upload failed" });
  }
};
