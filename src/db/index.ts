import mongoose from 'mongoose';
import Listing from "./models/listing";
import dotenv from 'dotenv';
dotenv.config();

const { DB_CONNECTION_STR, DB_NAME } = process.env;
let db: any

export const connectDb = async () => {
  if (!db) {
    const db = await mongoose.connect(
      DB_CONNECTION_STR,
      { dbName: DB_NAME },
    );
    return db;
  }
};

export const models = {
  Listing
}

export default models;