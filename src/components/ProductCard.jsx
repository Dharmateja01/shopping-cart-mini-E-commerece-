// src/components/ProductCard.jsx
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <p className="text-6xl mb-4">{product.image}</p>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
      <p className="text-2xl font-bold text-green-600 mb-4">₹{product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className={`w-full py-2 rounded-lg font-medium transition duration-200 ${
          isInCart 
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
        disabled={isInCart}
      >
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;