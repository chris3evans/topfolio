import { User } from '@topfolio/api-interfaces';

export const fetcher = async (
  url: string,
  method: string,
  body?: User | object
): Promise<User | object> => {
  try {
    const res = await fetch(url, {
      method: `${method}`,
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (e) {
    return { fetcherError: e };
  }
};
