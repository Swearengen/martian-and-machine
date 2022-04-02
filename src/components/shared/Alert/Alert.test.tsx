import { render, screen } from '@testing-library/react';
import { Alert, IToast } from './Alert';

describe('Alert', () => {
  it('should render success message', () => {
    const toast = {
      message: 'success',
      type: 'success',
    } as IToast;

    const onDeleteToast = jest.fn();
    render(<Alert toast={toast} onDeleteToast={onDeleteToast} />);
    expect(screen.getByText('success')).toBeDefined();
  });
});

export {};
