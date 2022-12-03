import { queryByPlaceholderText, render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';

import ContactMeForm from './contact-me-form';

describe('ContactMeForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactMeForm token={''} />);
    expect(baseElement).toBeTruthy();
  });
  it('should fill up the form and save', () => {
    /* const searchInput = queryByPlaceholderText(
 
     fireEvent.change(searchInput, { target: { value: 'test' } })
 
     expect(searchInput.value).toBe('test') // OR
     expect(setSearch).toHaveBeenCalledWith('test') */

  });
});
