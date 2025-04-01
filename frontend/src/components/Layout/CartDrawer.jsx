import React from 'react'
import { useState } from 'react'
import { HiX } from 'react-icons/hi'
import CartContent from '../Cart/CartContent'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {

    const navigate = useNavigate();
    const { user, guestId } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);
    const userId = user ? user._id : null;

    const handleCheckout = () => {
        toggleCartDrawer();
        if (!user) {
            navigate("/login?redirect=checkout");
        } else {
            navigate("/checkout");
        }
    }

  return (
    <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[25rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
        {/* Close Button */}
        <div className='flex justify-end p-4'>
            <button
                onClick={toggleCartDrawer}
            >
                <HiX className='h-6 w-6 text-gray-600 cursor-pointer'/>
            </button>
        </div>
        {/* Cart contents with scrollable area */}
        <div className='flex-grow p-4 overflow-y-auto'>
            <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
            {cart && cart?.products?.length > 0 ? (
                <CartContent cart={cart} userId={userId} guestId={guestId}/>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>

        {/* Checkout Button fixed at the bottom */}
        <div className='p-4 bg-white sticky bottom-0'>
            {cart && cart?.products?.length > 0 && (
                <>
                    <button 
                        onClick={handleCheckout}
                        className='w-full bg-squad-navy-blue text-white py-3 rounded-lg font-semibold hover:bg-squad-dark-light-blue transition cursor-pointer'
                    >
                        Checkout
                    </button>
                    <p className='text-sm tracking-tighter text-center mt-2 text-gray-500'>
                        Shipping, taxes & discounts calculated at checkout
                    </p>
                </>
            )}  
        </div>
    </div>
  )
}

export default CartDrawer