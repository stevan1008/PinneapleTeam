import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GestionVendedores from './GestionVendedores';

describe('<GestionVendedores />', () => {
  test('it should mount', () => {
    render(<GestionVendedores />);
    
    const gestionVendedores = screen.getByTestId('GestionVendedores');

    expect(gestionVendedores).toBeInTheDocument();
  });
});