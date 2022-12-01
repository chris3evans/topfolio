import { User } from '@topfolio/api-interfaces';
import { Colors } from '../../../../libs/api-interfaces/src';

export const fetcher = async (
  url: string,
  method: string,
  body?: User | object,
  token?: string
): Promise<User | object> => {
  try {
    const res = await fetch(url, {
      method: `${method}`,
      /* credentials: 'include', */
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        //prettier-ignore
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (e) {
    return { fetcherError: e };
  }
};

export const fetcherColors = async (
  url: string,
  method: string,
  body?: User | object
): Promise<Colors | object> => {
  try {
    const res = await fetch(url, {
      method: `${method}`,
      /* credentials: 'include', */
      mode: 'cors',
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (e) {
    return {
      fetcherError: e,
    };
  }
};
