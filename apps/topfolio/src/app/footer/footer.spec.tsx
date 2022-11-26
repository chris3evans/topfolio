import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });
  it('Should find links base on name', () => {
    const { getByRole } = render(<Footer />);
    const link = getByRole('link', {
      name: 'Topfolio Facebook link',
    });
    expect(link).toBeTruthy();
  });
  it('Should redirect on click', () => {
    const { getByRole } = render(<Footer />);
    const link = getByRole('link', {
      name: 'Topfolio Facebook link',
    });
    expect(link).toHaveAttribute('href', '');
  });
});
