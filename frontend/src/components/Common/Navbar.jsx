import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag, HiOutlineUser, HiMenuAlt3} from 'react-icons/hi'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <>
        <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
            {/* Left - Logo */}
            <div>
                <Link to='/' className='text-2xl font-medium'>
                    Squad
                </Link>
            </div>
            {/* Center - Navigation Links */}
            <div className='hidden md:flex space-x-6'>
                <Link 
                    to='#' 
                    className='text-gray-500 hover:text-gray-900 text-sm font-medium uppercase'
                >
                    Men
                </Link>
                <Link 
                    to='#' 
                    className='text-gray-500 hover:text-gray-900 text-sm font-medium uppercase'
                >
                    Women
                </Link>
                <Link 
                    to='#' 
                    className='text-gray-500 hover:text-gray-900 text-sm font-medium uppercase'
                >
                    Top Wear
                </Link>
                <Link 
                    to='#' 
                    className='text-gray-500 hover:text-gray-900 text-sm font-medium uppercase'
                >
                    Bottom Wear
                </Link>
            </div>
            <div>
                {/* Right - Icons */}
                <div className='flex items-center space-x-4'>
                    <Link to='#' className='hover:text-gray-900'>
                        <HiOutlineUser className='h-6 w-6 text-gray-700'/>
                    </Link>
                    <button className='relative hover:text-black'>
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
                        <span className='absolute -top-1 -right-2 bg-squad-blue text-white rounded-full px-1 text-xs'>
                            4
                        </span>
                    </button>
                    {/* Search */}
                    <div className='overflow-hidden'> 
                        <SearchBar/>    
                    </div>

                    <button className='md:hidden'>
                        <HiMenuAlt3 className='h-6 w-6 text-gray-700'/>      
                    </button>
                </div>
            </div>
        </nav>

    </>
  )
}

export default Navbar