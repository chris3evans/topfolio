import json from './mock-result';

console.log('mock fetcher ts');

export const fetcher = async (
  url: string,
  method: string,
  body?: object,
  token?: string
): Promise<object> => {
  try {
    // const res = await fetch(url, {
    //   method: `${method}`,
    //   /* credentials: 'include', */
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     //prettier-ignore
    //     'Authorization': `Bearer ${token}`,
    //   },
    //   body: JSON.stringify(body),
    // });
    // return await res.json();
    return json;
  } catch (e) {
    return { fetcherError: e };
  }
};
