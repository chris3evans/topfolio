import { render } from '@testing-library/react';

import WorkHistoryComponent from './work-history-component';

describe('WorkHistoryComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkHistoryComponent />);
    expect(baseElement).toBeTruthy();
  });
});
