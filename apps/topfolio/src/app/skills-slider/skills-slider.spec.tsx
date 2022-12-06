import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, describe, it } from '@jest/globals';
import { SkillsSLider } from './skills-slider';

const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
describe('SkillsSLider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SkillsSLider
        skill={{
          skill: '',
          level: 0,
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
