import { fireEvent, render, screen } from '@testing-library/react';
import { expect, describe, it, jest, test } from '@jest/globals';
import json from './mocks/mock-result';

import FormWorkExperience from './form-work-experience';

const mockExistingData = {
  company_name: 'Google',
  image: 'http://localhost/Image.png',
  description: 'Mock description',
  start_date: '11/09/2022',
  end_date: '11/12/2022',
  _id: '123',
};

describe('FormWorkExperience', () => {
  const mockFn = jest.fn();
  const { baseElement } = render(
    <FormWorkExperience
      token="123"
      listener={mockFn}
      existingData={mockExistingData}
    />
  );

  const companyNameInput = screen.getByTestId(
    'test-company-name'
  ) as HTMLInputElement;
  const descriptionInput = screen.getByTestId(
    'test-description'
  ) as HTMLInputElement;
  const startDateInput = screen.getByTestId(
    'test-start-date'
  ) as HTMLInputElement;
  const endDateInput = screen.getByTestId('test-end-date') as HTMLInputElement;

  it('should render successfully', () => {
    expect(baseElement).toBeTruthy();
  });

  describe('Edit existing work experience data', () => {
    describe('Inputs are filled with correct data', () => {
      it('should fill company name input with existing data', () => {
        fireEvent.input(companyNameInput, {
          target: {
            defaultValue: mockExistingData.company_name,
          },
        });
        expect(companyNameInput.defaultValue).toBe(
          mockExistingData.company_name
        );
      });

      it('should fill description input with existing data', () => {
        fireEvent.input(descriptionInput, {
          target: {
            defaultValue: mockExistingData.description,
          },
        });
        expect(descriptionInput.defaultValue).toBe(
          mockExistingData.description
        );
      });

      it('should fill start date input with existing data', () => {
        fireEvent.input(startDateInput, {
          target: {
            defaultValue: mockExistingData.start_date,
          },
        });
        expect(startDateInput.defaultValue).toBe(mockExistingData.start_date);
      });

      it('should fill the end date input with existing data', () => {
        fireEvent.input(endDateInput, {
          target: {
            defaultValue: mockExistingData.end_date,
          },
        });
        expect(endDateInput.defaultValue).toBe(mockExistingData.end_date);
      });
    });

    describe('Enter inputs from the pre-filled values', () => {
      it('should be able to type in the company name field and edit the value', () => {
        fireEvent.change(companyNameInput, {
          target: {
            value: ' edit',
          },
        });
        expect(companyNameInput.value).toBe(
          `${mockExistingData.company_name} edit`
        );
      });
    });
  });
});
