// src/pages/CartPage.jsx
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cartItems, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center p-10 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">Your Cart is Empty! 🙁</h1>
        <p className="text-lg text-gray-600 mb-6">Start shopping to add items to your cart.</p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Go to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Cart Items List */}
      <div className="lg:w-3/4 bg-white rounded-xl shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold p-6 bg-gray-100 border-b text-gray-800">Shopping Cart</h1>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Cart Summary */}
      <div className="lg:w-1/4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 border-b pb-3 text-gray-800">Order Summary</h2>
          <div className="flex justify-between text-xl font-medium mb-4">
            <span>Subtotal:</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-extrabold text-indigo-600 mb-6">
            <span>Order Total:</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </div>
          <button
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg text-lg hover:bg-green-700 transition duration-200"
            onClick={() => alert(`Checkout Total: ₹${cartTotal.toFixed(2)}`)}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;