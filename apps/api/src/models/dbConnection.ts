import { environment } from "../environments/environment.prod";
const uri = environment.DB_URI
import { connect } from "mongoose";

export async function dbConnection() {
    try {
import * as dotenv from 'dotenv'
dotenv.config();

        await connect(uri);
        console.log('Successfully connected to MongoDB');
// const uri = process.env.DB_URI
const uri = "mongodb://127.0.0.1:27017"
import mongoose from "mongoose";

    } catch (error) {
        console.log(error)
    }
mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => console.log(error));

}
export = mongoose