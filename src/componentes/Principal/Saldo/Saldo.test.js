import { render, screen } from '@testing-library/react';
import Saldo from './index';

test('Saldo sempre deve seguir um formato', () => {
  render(<Saldo saldo={1000} />);

  const screenSaldo = screen.getByTestId('saldo');
  expect(screenSaldo).toHaveTextContent('R$ 1000');
});
