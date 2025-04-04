import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SortOptions = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };

  return (
    <div className='mb-4 flex items-center justify-end'>
      <select 
        name="" 
        id="sort" 
        onChange={handleSortChange}
        value={searchParams.get("sortBy" || "")}
        className="border px-2 py-2 rounded-md focus:outline-none"
      >
        <option value="">Default</option>
        <option value="priceAcc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  )
}

export default SortOptions