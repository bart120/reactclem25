import {render, screen, fireEvent} from '@testing-library/react';
import BrandsList from './BrandsList';
import { expect, test } from 'vitest';


test('le titre de la page liste des marques', () =>{
    render(<BrandsList />);
    const search = screen.getByText(/Les marques/i);
    expect(search).toBeInTheDocument();
});

test('Les données se chargent',() =>{
    render(<BrandsList />);
    const button = screen.getByRole('button', { name: /Charger les données/i });
    fireEvent.click(button);
    const search = screen.getAllByText(/Audi/i);
    expect(search.length).toBeGreaterThan(0);
});

    
