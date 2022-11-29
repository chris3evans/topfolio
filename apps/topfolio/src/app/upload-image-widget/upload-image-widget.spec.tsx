import { render } from '@testing-library/react';

import UploadImageWidget from './upload-image-widget';

describe('UploadImageWidget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UploadImageWidget />);
    expect(baseElement).toBeTruthy();
  });
});
