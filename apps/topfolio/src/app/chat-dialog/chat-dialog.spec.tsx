import { render } from '@testing-library/react';

import ChatDialog from './chat-dialog';

describe('ChatDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatDialog />);
    expect(baseElement).toBeTruthy();
  });
});
