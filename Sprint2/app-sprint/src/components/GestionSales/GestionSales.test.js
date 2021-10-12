import React from 'react';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GestionSales from './GestionSales';

describe('<GestionSales />', () => {
    test('it slould mount', () => {
        render(<GestionSales />);

        const gestionSales = screen.getByTestId('GestionSales');

        expect (gestionSales).toBeInTheDocument();
    })
});