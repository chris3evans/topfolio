import { render } from '@testing-library/react';
import { UserContext } from '../../utils/UserContext';
import { mockUserState } from '../mockUser';
import { expect, describe, it, jest } from '@jest/globals';
import SectionsComponent from '../sections-component/sections-component';
const setUser = jest.fn();
const userDetails = mockUserState;
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
describe('Section', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <UserContext.Provider value={{ userDetails, setUser }}>
        <SectionsComponent viewMode={true} />
      </UserContext.Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
