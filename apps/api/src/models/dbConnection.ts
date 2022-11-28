import { environment } from "../environments/environment.prod";
const uri = environment.DB_URI
console.log(uri)
import { connect } from "mongoose";

export async function dbConnection() {
    try {

        await connect(uri);
        console.log('Successfully connected to MongoDB');

    } catch (error) {
        console.log(error)
    }

}
