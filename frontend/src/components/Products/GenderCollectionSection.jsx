import React from 'react'
import { Link } from 'react-router-dom'
import mensCollectionImage from '../../assets/mens-collection.webp'
import womensCollectionImage from '../../assets/womens-collection.webp'

const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
      <div className='container mx-auto flex flex-col md:flex-row gap-8'>
        {/* Womens Collection */}
        <div className='relative flex-1'>
          <img
            src={womensCollectionImage}
            alt="Women's Collection"
            className='w-full h-[700px] object-cover'
          />
          <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded-lg'>
            <h2 className='text-2xl font-bold text-gray-900 mb-3'>
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className='bg-squad-light-navy-blue text-gray-950 px-3 py-2 rounded-lg text-lg shadow-md'
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Mens Collection */}
        <div className='relative flex-1'>
          <img
            src={mensCollectionImage}
            alt="Men's Collection"
            className='w-full h-[700px] object-cover'
          />
          <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded-lg'>
            <h2 className='text-2xl font-bold text-gray-900 mb-3'>
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className='bg-squad-light-navy-blue text-gray-950 px-3 py-2 rounded-lg text-lg shadow-md'
            >
              Shop Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default GenderCollectionSection