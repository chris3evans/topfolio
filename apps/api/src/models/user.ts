const model = require('../schemas/user');
import { User } from '../../../../libs/api-interfaces/src/lib/api-interfaces';
import plain from './plainUser'
async function getUserByUrl(url: string) {
  return await model.findOne({ slug_url: url });
}

async function getUser(userId: string) {
  return await model.findOne({ userId: userId });
}

async function addUser(data: User) {
  console.log(data)
  const newData = { ...plain, ...data }
  console.log("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
  console.log(newData)
  const user = await model.create(newData);
  user.portfolio.layout = [...['Work Experience', 'Projects', 'About me']];
  await user.save();
  return await user;
}

async function updateUser(data: User, userId: string) {
  return await model.findOneAndReplace({ userId: userId }, data);
}

export = { getUser, addUser, updateUser, getUserByUrl };
