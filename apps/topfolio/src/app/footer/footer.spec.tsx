import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from './footer';

const footer = (
  <Footer
    github="https://github.com/"
    facebook="https://facebook.com/"
    linkedin="https://www.linkedin.com/"
  />
);
describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(footer);
    expect(baseElement).toBeTruthy();
  });
  it('Should find links base on name', () => {
    const { getByRole } = render(footer);
    const link = getByRole('link', {
      name: 'Topfolio Facebook link',
    });
    expect(link).toBeTruthy();
  });
  it('Should display the proper links from props', () => {
    const { getByRole } = render(footer);
    const link = getByRole('link', {
      name: 'Topfolio Facebook link',
    });
    const link2 = getByRole('link', {
      name: 'Topfolio Github link',
    });
    const link3 = getByRole('link', {
      name: 'Topfolio Linkedin link',
    });
    expect(link).toHaveAttribute('href', 'https://facebook.com/');
    expect(link2).toHaveAttribute('href', 'https://github.com/');
    expect(link3).toHaveAttribute('href', 'https://www.linkedin.com/');
  });
});
