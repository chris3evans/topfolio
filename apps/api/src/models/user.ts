const model = require('../schemas/user')
import { User } from "../../../../libs/api-interfaces/src/lib/api-interfaces"

async function getuser(userId: string) {
    return await model.findOne({ userId: userId });
}

async function addUser(data: User) {
    return await model.create(data);
}

async function updateUser(data: User, userId: string) {
    return await model.findOneAndReplace({ userId: userId }, data);
}


export = { getuser, addUser, updateUser };
