// import { User } from '@topfolio/api-interfaces';
import { WorkExperience, User } from '../../../../libs/api-interfaces/src';
import { environment } from '../environments/environment';
import { fetcher } from './fetcher';

// CRUD /user service
export const getUser = async (slug: string) => {
  return await fetcher(environment.API_URL + slug, 'GET');
};
export const postUser = async (body: User | object, token: string) => {
  return await fetcher(environment.API_URL, 'POST', body, token);
};
export const updateUser = async (body: User | object, token: string) => {
  return await fetcher(environment.API_URL, 'PUT', body, token);
};
