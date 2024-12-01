import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/productsSlice';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      className="p-2 border border-gray-300 rounded w-full mb-4"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
