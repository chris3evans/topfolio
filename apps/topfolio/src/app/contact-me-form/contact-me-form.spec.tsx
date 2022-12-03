import { render, fireEvent, act } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';
import userEvent from '@testing-library/user-event'

import ContactMeForm from './contact-me-form';
import { updateUser, getUser } from '../../utils/ApiService';

describe('ContactMeForm', () => {
  it('should render successfully', () => {
    /* const { baseElement } = render(<ContactMeForm token={''} />);
    expect(baseElement).toBeTruthy(); */
  });

  it('should fill up the form and save', async () => {
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InlHR2c5bmFFWkpISlBaaVFDZ21UNyJ9.eyJpc3MiOiJodHRwczovL2Rldi1vbmJkdDhjM3ozam5tN3JrLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMjg0MzAzMjM5ODExMDM2OTE1MCIsImF1ZCI6WyJodHRwczovL2hlbGxvLXdvcmxkLmV4YW1wbGUuY29tIiwiaHR0cHM6Ly9kZXYtb25iZHQ4YzN6M2pubTdyay51cy5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjcwMDA3NTA2LCJleHAiOjE2NzAwOTM5MDYsImF6cCI6InJRa0FZb1BKS3dydllSSklUbFVvT2N6bGdFQXFNTTBBIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInBlcm1pc3Npb25zIjpbXX0.FZa-JjkarXwnbEHyyFJxVNqak-tYbgK9IU-QS1Nvf6jok62gLx1a2NySmcJlZJ-oe1KQ19vjNR-jVD07C-pvkQfSMaG5WzMHnu3WPde8mfe20ZSQzYcQWGjq8bsRn3_e7Z0e3wd-XE10wUL3u1H-xdRZR7Veaf97pdheWnV9TZsv9F3GBg_nWknG4b2al8scRHlEr8JVyuVF-74D-MRpI8r8AdTrQwRmwBz3M8tPDY0Mk7kCVH8demwDYrpsXwGxGbPPZVu9T7bzSLzACRg8HWEtUzcI3OQazKhOno9NRXp_A_aQLc1ONKI049hO6Hf1RYwzcczawNQT4CVNI08Crg';
    const { baseElement } = render(<ContactMeForm token={token} />);
    const phone = baseElement.querySelector('#phone') as HTMLInputElement;
    const email = baseElement.querySelector('#email') as HTMLInputElement;
    fireEvent.input(phone, { target: { defaultValue: '1234567' } });
    console.log("--------->PHONE: ", phone.defaultValue, email.defaultValue);
    const button = baseElement.querySelector('#contact-submit') as HTMLInputElement;
    act(() => {
      /* fire events that update state */
      button.disabled = false;
      fireEvent.click(button);
    });
    await new Promise((r) => setTimeout(r, 1000));
    //expect(onsubmit).toHaveBeenCalled();
  });
});
