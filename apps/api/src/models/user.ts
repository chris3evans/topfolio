const model = require('../schemas/user');
import { Skill, User } from '@topfolio/api-interfaces';
import plain from './plainUser';

async function getUserByUrl(url: string) {
  const user = await model.findOne({ slug_url: url });
  return user;
}

async function sortTags(user: any) {
  user.portfolio.skills.sort((a: Skill, b: Skill) => b.level - a.level);
  user.save();
  return user
}

async function getUser(userId: string) {
  return await model.findOne({ userId: userId });
}

async function addUser(data: User) {
  const newData = { ...plain, ...data };
  const user = await model.create(newData);
  return await user;
}

async function updateUser(data: User, userId: string) {
  return await model.findOneAndReplace({ userId: userId }, data);
}

export = { getUser, addUser, updateUser, getUserByUrl, sortTags };
