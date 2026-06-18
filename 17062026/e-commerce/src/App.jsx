import { useState, useMemo, useCallback } from "react";
import "./App.css";
import AddProductForm from "./components/AddProductForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "./productsMock";

function App() {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [view, setView] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleAddProduct = (data) => {
    const newProduct = {
      id: Date.now(),
      title: data.title,
      price: Number(data.price),
      category: data.category,
      rating: 5.0,
      ratingCount: 1,
      stock: data.stock,
      image: data.image,
      description: data.description,
    };
    setProducts([newProduct, ...products]);
  };

  const displayProducts = useMemo(() => {
    return products.map((item) => {
      const cartItem = cart.find((c) => c.id === item.id);
      const cartQuantity = cartItem ? cartItem.quantity : 0;
      return {
        ...item,
        stock: Math.max(0, (item.stock || 5) - cartQuantity),
      };
    });
  }, [products, cart]);

  const filteredProducts = useMemo(() => {
    return displayProducts.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [displayProducts, selectedCategory, searchQuery]);

  const handleAddToCart = useCallback((product) => {
    if (product.stock <= 0) {
      alert("This product is out of stock!");
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  }, []);

  const handleUpdateQuantity = useCallback(
    (productId, newQuantity) => {
      const mainProduct = products.find((p) => p.id === productId);
      if (!mainProduct) return;

      if (newQuantity <= 0) {
        setCart((prev) => prev.filter((item) => item.id !== productId));
        return;
      }

      if (newQuantity > mainProduct.stock) {
        alert(
          `Üzgünüz, bu üründen en fazla ${mainProduct.stock} adet ekleyebilirsiniz.`,
        );
        return;
      }

      setCart((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item,
        ),
      );
    },
    [products],
  );

  const handleRemoveFromCart = useCallback((productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  const totalCartQuantity = useMemo(() => {
    return cart.length;
  }, [cart]);

  return (
    <>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
        setView={setView}
        cartQuantity={totalCartQuantity}
        onCartOpen={() => setIsCartOpen(true)}
      />
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setView={setView}
        categories={MOCK_CATEGORIES}
      />

      {view === "home" ? (
        <main className="main-layout">
          <Sidebar
            categories={MOCK_CATEGORIES}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="content-area">
            <div className="content-header">
              <h1 className="page-title">
                {selectedCategory} {searchQuery && ` "${searchQuery}"`} ürünler
              </h1>
              <span className="text-sm">
                Total {filteredProducts.length} Ürün
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">
                  Aradığınız kriterlere uygun ürün bulunamadı.
                </p>
              </div>
            ) : (
              <ProductGrid
                products={filteredProducts}
                onAddToCart={handleAddToCart}
              />
            )}
          </div>
        </main>
      ) : (
        <AddProductForm
          onAddProduct={handleAddProduct}
          categories={MOCK_CATEGORIES}
          setView={setView}
        />
      )}

      <Cart
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
      />

      <Footer />
    </>
  );
}

export default App;
