import React from 'react';
import { Product } from '../features/productsSlice';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-40 object-contain mb-2"
      />
      <h2 className="text-lg font-semibold text-center truncate">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-yellow-500">{product.rating.rate} ⭐</p>
    </div>
  );
};

export default ProductCard;
