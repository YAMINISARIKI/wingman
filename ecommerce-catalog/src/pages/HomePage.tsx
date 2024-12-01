import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, Product } from '../features/productsSlice';
import { RootState, AppDispatch } from '../store';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/Searchbar';

const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => (state.products as any).items);
  const searchQuery = useSelector((state: RootState) => (state.products as any).searchQuery);
  const status = useSelector((state: RootState) => (state.products as any).status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product: Product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <SearchBar />
      {status === 'loading' && <p>Loading products...</p>}
      {status === 'failed' && <p>Failed to fetch products.</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
