import { fireEvent, render, screen } from '@testing-library/react';
import { expect, describe, it, jest, test } from '@jest/globals';
import json from './mocks/mock-result';

import FormWorkExperience from './form-work-experience';

describe('FormWorkExperience', () => {
  // jest.mock('../mocks/fetcherMock');
  // jest.mock<typeof import('../mocks/fetcherMock')>(
  //   '../mocks/fetcherMock',
  //   () => {
  //     console.log(json);
  //     return json;
  //   }
  // );

  it('should render successfully', () => {
    const { baseElement } = render(<FormWorkExperience />);
    expect(baseElement).toBeTruthy();
  });

  // it('should update inputs on type', async () => {
  //   type TestElement = Element;

  //   function hasInputValue(e: TestElement, inputValue: string) {
  //     return screen.getByDisplayValue(inputValue) === e;
  //   }
  //   const { baseElement } = render(<FormWorkExperience />);

  //   const companyNameInput = await screen.findByTestId('test-company-name');
  //   const descriptionInput = await screen.findByTestId('test-description');
  //   const startDateInput = await screen.findByTestId('test-start-date');
  //   const endDateInput = await screen.findByTestId('test-end-date');

  //   expect(companyNameInput).toBeTruthy();
  //   expect(descriptionInput).toBeTruthy();
  //   expect(startDateInput).toBeTruthy();
  //   expect(endDateInput).toBeTruthy();

  //   fireEvent.change(companyNameInput, { target: { value: 'Google' } });
  //   fireEvent.change(descriptionInput, {
  //     target: {
  //       value:
  //         'I worked as a front end developer at Google using React and TypeScript',
  //     },
  //   });
  //   fireEvent.change(startDateInput, { target: { value: '12/10/2022' } });
  //   fireEvent.change(endDateInput, { target: { value: '12/11/2022' } });

  //   expect(hasInputValue(companyNameInput, 'Google')).toBeTruthy();
  //   expect(
  //     hasInputValue(
  //       descriptionInput,
  //       'I worked as a front end developer at Google using React and TypeScript'
  //     )
  //   ).toBeTruthy();
  //   expect(hasInputValue(startDateInput, '12/10/2022')).toBeTruthy();
  //   expect(hasInputValue(endDateInput, '12/11/2022')).toBeTruthy();
  // });

  // User should be able to save data
  // Context should be updated
  // Api request should be made to the database
  // Response should be received from the database
});
