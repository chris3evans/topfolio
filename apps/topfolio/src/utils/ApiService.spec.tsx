import { fetcher } from './fetcher';
import { environment } from '../../src/environments/environment';
import { expect, describe, it, jest } from '@jest/globals';

import fetch from 'jest-fetch-mock';
// TODO add more tests

const fakeFetch = jest.fn();
window.fetch = fakeFetch;
describe('ApiService & Fetcher', () => {
  it('fetcher should call the right method on fetch', async () => {
    await fetcher(environment.API_URL, 'GET');
    expect(fakeFetch.mock.calls[0][1].method).toBe('GET');
    expect(fakeFetch.mock.calls[0][1].body).toBe(undefined);
  });
});
