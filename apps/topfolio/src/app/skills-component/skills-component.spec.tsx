import { render } from '@testing-library/react';

import SkillsComponent from './skills-component';

const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
describe('SkillsComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkillsComponent />);
    expect(baseElement).toBeTruthy();
  });
});
