export default function ProductGrid({ products, onAddToCart }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-img-container">
        <img src={product.image} alt={product.title} className="product-img" />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        <div className="product-rating">
          <span>★</span>
          <span>{product.rating}</span>
          <span className="text-gray-400">({product.ratingCount})</span>
          <span 
            className="stock-info" 
            style={{ marginLeft: "10px", color: product.stock === 0 ? "red" : "green" }}
          >
            {product.stock === 0 ? "Out of Stock" : `Stock: ${product.stock}`}
          </span>
        </div>
        <div className="product-price-container">
          <span className="product-price">{product.price.toLocaleString('tr-TR')} ₺</span>
          <button 
            className="product-btn" 
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            style={{ opacity: product.stock === 0 ? 0.5 : 1 }}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
}