import { render } from '@testing-library/react';

import HeroComponent from './hero-component';

describe('HeroComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroComponent />);
    expect(baseElement).toBeTruthy();
  });
});
