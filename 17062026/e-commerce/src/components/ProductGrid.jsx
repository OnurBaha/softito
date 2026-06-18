
export default function ProductGrid({ products, onSepeteEkle }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSepeteEkle={onSepeteEkle} />
      ))}
    </div>
  );
}

function ProductCard({ product, onSepeteEkle }) {
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
          <span className="stok-bilgisi" style={{ marginLeft: "10px", color: product.stok === 0 ? "red" : "green" }}>
            {product.stok === 0 ? "Tükendi" : `Stok: ${product.stok}`}
          </span>
        </div>
        <div className="product-price-container">
          <span className="product-price">{product.price.toLocaleString('tr-TR')} ₺</span>
          <button 
            className="product-btn" 
            onClick={() => onSepeteEkle(product)}
            disabled={product.stok === 0}
            style={{ opacity: product.stok === 0 ? 0.5 : 1 }}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
}