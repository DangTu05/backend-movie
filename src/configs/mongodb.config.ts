/* eslint-disable no-console */
import mongoose from "mongoose";
import env from "./environment.config";
export const connect = async () => {
  try {
    await mongoose.connect(env.MONGO_URL);
    console.log("connect sucessfully!!!");
  } catch {
    console.log("connect failue!!!");
  }
};

export const close = async (): Promise<void> => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};
