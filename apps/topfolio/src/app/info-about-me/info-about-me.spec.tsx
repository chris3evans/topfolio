import { render } from '@testing-library/react';

import InfoAboutMe from './info-about-me';

describe('InfoAboutMe', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InfoAboutMe />);
    expect(baseElement).toBeTruthy();
  });
});
