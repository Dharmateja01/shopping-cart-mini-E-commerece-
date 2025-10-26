// src/pages/ProductsPage.jsx
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function ProductsPage() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Available Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;