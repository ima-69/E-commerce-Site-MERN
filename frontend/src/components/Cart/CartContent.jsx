import React from 'react';
import { HiMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
import { RiDeleteBin3Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { updateCartItemQuantity, removeFromCart } from '../../redux/slices/cartSlice'; // Add the correct path

const CartContent = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();

  // Handle adding or subtracting to cart
  const handleAddToCart = (productId, delta, quantity, size, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId,
          size,
          color,
        })
      );
    }
  };

  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(removeFromCart({ productId, guestId, userId, size, color }));
  };

  return (
    <div>
      {cart.products.map((product, index) => {
        const totalPrice = (product.price * product.quantity).toFixed(2); // Calculate total price based on quantity
        return (
          <div key={index} className='flex items-start justify-between border-b border-gray-500 py-4'>
            <div className='flex items-start'>
              <img
                src={product.image}
                alt={product.name}
                className='w-20 h-24 object-cover mr-4 rounded'
              />
              <div>
                <h3>{product.name}</h3>
                <p className='text-gray-500 text-sm'>
                  size: {product.size} | color: {product.color}
                </p>
                <div className='flex items-center mt-2'>
                  <button
                    onClick={() =>
                      handleAddToCart(
                        product.productId,
                        -1,
                        product.quantity,
                        product.size,
                        product.color
                      )
                    }
                    className='border border-gray-500 rounded px-2 py-2 text-xl font-medium cursor-pointer'
                    disabled={product.quantity <= 1} // Disable minus button if quantity is 1
                  >
                    <HiMinusSm />
                  </button>
                  <span className='px-4'>{product.quantity}</span>
                  <button
                    onClick={() =>
                      handleAddToCart(
                        product.productId,
                        1,
                        product.quantity,
                        product.size,
                        product.color
                      )
                    }
                    className='border border-gray-500 rounded px-2 py-2 text-xl font-medium cursor-pointer'
                  >
                    <HiOutlinePlusSm />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className='font-medium'>${totalPrice}</p> {/* Display dynamic total price */}
              <button
                onClick={() =>
                  handleRemoveFromCart(product.productId, product.size, product.color)
                }
              >
                <RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600 cursor-pointer' />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartContent;
