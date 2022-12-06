import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, describe, it } from '@jest/globals';
import SkillsSphere from './skills-sphere';
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
describe('SkillsSphere', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkillsSphere skills={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
