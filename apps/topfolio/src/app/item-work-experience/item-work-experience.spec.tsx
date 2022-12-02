import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, describe, it, jest } from '@jest/globals';

import ItemWorkExperience from './item-work-experience';
import FormWorkExperience from '../form-work-experience/form-work-experience';

const mockWorkExperience = {
  company_name: 'Google',
  image: 'http://localhost/Image.png',
  description: 'Mock description',
  start_date: '11/09/2022',
  end_date: '11/12/2022',
  _id: '123',
};

describe('ItemWorkExperience', () => {
  const mockFn = jest.fn(); // --> () => {}
  const { baseElement } = render(
    <ItemWorkExperience
      company_name={'Google'}
      workXp={mockWorkExperience}
      listener={mockFn}
    />
  );
  const companyNameInfo = screen.getByTestId('test-company-name');
  const descriptionInfo = screen.getByTestId('test-description');
  const startDateInfo = screen.getByTestId('test-start-date');
  const endDateInfo = screen.getByTestId('test-end-date');
  const imageInfo = screen.getByTestId(
    'test-work-experience-image'
  ) as HTMLImageElement;

  const editButton = screen.getByTestId('test-edit-button');
  const deleteButton = screen.getByTestId('test-delete-button');

  it('should render successfully', () => {
    expect(baseElement).toBeTruthy();
  });

  describe('card should render work experience data', () => {
    it('should render company data', () => {
      expect(companyNameInfo).toBeTruthy();
      expect(companyNameInfo.textContent).toBe(mockWorkExperience.company_name);
    });

    it('should render description data', () => {
      expect(descriptionInfo).toBeTruthy();
      expect(descriptionInfo.textContent).toBe(mockWorkExperience.description);
    });

    it('should render start date data', () => {
      expect(startDateInfo).toBeTruthy();
      expect(startDateInfo.textContent).toBe(mockWorkExperience.start_date);
    });

    it('should render end date data', () => {
      expect(endDateInfo).toBeTruthy();
      expect(endDateInfo.textContent).toBe(mockWorkExperience.end_date);
    });

    it('should render image with alt text', () => {
      expect(imageInfo).toBeTruthy();
      expect(imageInfo.src).toBe(mockWorkExperience.image);
      expect(imageInfo.alt).toBe(`${mockWorkExperience.company_name} logo`);
    });
  });

  describe('edit button should open edit UI', () => {
    it('should render the edit button', () => {
      expect(editButton).toBeTruthy();
    });

    it('should be able to click on it', () => {
      fireEvent.click(editButton);
    });

    it('should render the form instead of the item', () => {
      const workExperienceForm = render(
        <FormWorkExperience
          existingData={mockWorkExperience}
          token="123"
          listener={mockFn}
        ></FormWorkExperience>
      );

      expect(workExperienceForm).toBeTruthy();
      expect(screen).not.toContain(`${mockWorkExperience.company_name}`);
      expect(screen).not.toContain(`${mockWorkExperience.description}`);
      expect(screen).not.toContain(`${mockWorkExperience.start_date}`);
      expect(screen).not.toContain(`${mockWorkExperience.end_date}`);
      expect(screen).not.toContain(`${mockWorkExperience.image}`);
    });
  });

  describe('delete button should delete item', () => {
    it('should render the delete button', () => {
      expect(deleteButton).toBeTruthy();
    });

    it('should be able to click on it', () => {
      fireEvent.click(deleteButton);
    });

    it('should delete that work experience item', () => {
      expect(screen).not.toContain(`${mockWorkExperience.company_name}`);
      expect(screen).not.toContain(`${mockWorkExperience.description}`);
      expect(screen).not.toContain(`${mockWorkExperience.start_date}`);
      expect(screen).not.toContain(`${mockWorkExperience.end_date}`);
      expect(screen).not.toContain(`${mockWorkExperience.image}`);
    });
  });
});
