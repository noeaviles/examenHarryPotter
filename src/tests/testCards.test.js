import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import App from '../App'

test('Renderizado app', () => {
    const component = render(<App/>)
    
    component.getAllByText('Tenemos fallos de conexión recuerda levantar JSONServer')
})