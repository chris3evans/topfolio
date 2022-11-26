import { User } from '@topfolio/api-interfaces';

export const fetcher = async (
  url: string,
  method: string,
  body?: User | object,
  token?: string
): Promise<User | object> => {
  try {
    const res = await fetch(url, {
      method: `${method}`,
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        //prettier-ignore
        'Authentication': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (e) {
    return { fetcherError: e };
  }
};
