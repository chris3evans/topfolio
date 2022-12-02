import { render } from '@testing-library/react';
import { expect, describe, it } from '@jest/globals';

import SingleProject from './single-project';
import { MyProjects } from '@topfolio/api-interfaces';
const mockProject: MyProjects = {
  name: 'string',
  images: ['', ''],
  description: 'string',
  github_url: 'string',
  app_url: 'string',
  _id: 'string',
};
describe('SingleProject', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SingleProject project={mockProject} />);
    expect(baseElement).toBeTruthy();
  });
});
