import { User } from '@topfolio/api-interfaces';
import { environment } from '../src/environments/environment';
import { fetcher } from './fetcher';

export const getUser = async (slug: string) => {
  return await fetcher(environment.API_URL + slug, 'GET');
};
export const postUser = async (body: User | object) => {
  return await fetcher(environment.API_URL, 'POST', body);
};
export const updateUser = async (userID: string, body: User | object) => {
  return await fetcher(environment.API_URL, 'PUT', body);
};
