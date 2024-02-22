// eslint-disable-next-line no-unused-vars
import React from 'react';

import { render, screen} from '@testing-library/react';
import Cgallery from '../components/Cgallery';

jest.mock('../components/styles/Gallery.css', () => ({}));


jest.mock('react-router', () => ({
  useNavigate: () => jest.fn(),
}));
jest.mock('../services/dataMuebles', () => ({
  deleteProduct: jest.fn(),
}));

describe('Cgallery', () => {
  const testData = {
    data: [
      { id: 1, img: 'image1.jpg', name: 'Product 1', price: 100 },
      { id: 2, img: 'image2.jpg', name: 'Product 2', price: 200 },
    ],
  };

  test('renders correctly with data', () => {
    render(<Cgallery data={testData.data} />);
    
    testData.data.forEach((mueble) => {
      expect(screen.getByText(mueble.name)).toBeInTheDocument();
      expect(screen.getByText(`${mueble.price}€`)).toBeInTheDocument();
    });
  });

});