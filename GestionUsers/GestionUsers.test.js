import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GestionUsers from './GestionUsers';

describe('<GestionUsers />', () => {
  test('it should mount', () => {
    render(<GestionUsers />);
    
    const gestionUsers = screen.getByTestId('GestionUsers');

    expect(gestionUsers).toBeInTheDocument();
  });
});