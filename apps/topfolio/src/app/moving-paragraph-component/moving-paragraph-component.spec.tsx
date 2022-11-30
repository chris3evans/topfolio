import { render } from '@testing-library/react';

import MovingParagraphComponent from './moving-paragraph-component';

describe('MovingParagraphComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovingParagraphComponent />);
    expect(baseElement).toBeTruthy();
  });
});
