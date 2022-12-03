const model = require('../schemas/user');
import { User } from '../../../../libs/api-interfaces/src/lib/api-interfaces';

async function getUserByUrl(url: string) {
  return await model.findOne({ slug_url: url });
}

async function getuser(userId: string) {
  return await model.findOne({ userId: userId });
}

async function addUser(data: User) {
  const user = await model.create(data);
  user.portfolio.layout = [...['Work Experience', 'Projects', 'About me']];
  await user.save();
  return await user;
}

async function updateUser(data: User, userId: string) {
  return await model.findOneAndReplace({ userId: userId }, data);
}

export = { getuser, addUser, updateUser, getUserByUrl };
