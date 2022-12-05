import { render } from '@testing-library/react';

import TimelineItem from './timeline-item';

describe('TimelineItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimelineItem />);
    expect(baseElement).toBeTruthy();
  });
});
