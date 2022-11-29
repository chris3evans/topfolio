import { User } from '../../../../libs/api-interfaces/src/lib/api-interfaces';
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
  console.log('updated');
  return await fetcher(environment.API_URL, 'PUT', body, token);
};
export const colorApi = async () => {
  return await fetcher('http://colormind.io/api/', 'POST', {
    model: 'default',
  });
};
