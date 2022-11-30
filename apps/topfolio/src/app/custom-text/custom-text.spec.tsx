import { render } from '@testing-library/react';

import CustomText from './custom-text';

describe('CustomText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomText />);
    expect(baseElement).toBeTruthy();
  });
});
