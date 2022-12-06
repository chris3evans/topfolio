import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, describe, it } from '@jest/globals';

import Footer from './footer';
import { UserContext } from '../../utils/UserContext';
import { mockUserState } from '../mockUser';
const userDetails = mockUserState;
const setUser = () => {};
const footer = <Footer viewMode={true} />;
describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(footer);
    expect(baseElement).toBeTruthy();
  });
  it('Should find links base on name', () => {
    const { getByRole } = render(footer);
    const link = getByRole('link', {
      name: 'Facebook link',
    });
    expect(link).toBeTruthy();
  });
  it('Should display the proper links from user if in view mode', () => {
    const { getByRole } = render(
      <UserContext.Provider value={{ userDetails, setUser }}>
        <Footer viewMode={true} />
      </UserContext.Provider>
    );
    const link = getByRole('link', {
      name: 'Facebook link',
    });
    const link2 = getByRole('link', {
      name: 'Github link',
    });
    const link3 = getByRole('link', {
      name: 'Linkedin link',
    });
    expect(link).toHaveAttribute(
      'href',
      mockUserState.portfolio.contact_me?.social_media.facebook
    );
    expect(link2).toHaveAttribute(
      'href',
      mockUserState.portfolio.contact_me?.social_media.github
    );
    expect(link3).toHaveAttribute(
      'href',
      mockUserState.portfolio.contact_me?.social_media.linkedin
    );
  });
  // it('Should render Footer or FooterView base on viewMode passed', () => {
  //   const { footerView } = render(
  //     <UserContext.Provider value={{ userDetails, setUser }}>
  //       <Footer viewMode={true} />
  //     </UserContext.Provider>
  //   );
  //   const footerClass = footerView.getElementsByClassName('view-mode');
  //   expect(footerClass).toBeTruthy();
  // });
});
