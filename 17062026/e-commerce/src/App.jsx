import { useState, useMemo, useCallback } from "react";
import "./App.css";
import AddProductForm from "./components/AddProductForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Sidebar from "./components/Sidebar";
import Sepet from "./components/Sepet"; // Yeni ekledik
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "./productsMock";

function App() {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [sepet, setSepet] = useState([]);
  const [sepetAcik, setSepetAcik] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [view, setView] = useState('home');
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
      stok: 5, // Yeni eklenen ürünler için varsayılan stok
      image: data.image,
      description: data.description,
    };
    setProducts([newProduct, ...products]);
  };

  // Sepetteki adetleri düşerek dinamik stok hesaplama (useMemo)
  const displayProducts = useMemo(() => {
    return products.map((item) => {
      const sepetUrun = sepet.find((c) => c.id === item.id);
      const sepetAdet = sepetUrun ? sepetUrun.adet : 0;
      return {
        ...item,
        stok: Math.max(0, (item.stok || 5) - sepetAdet) // Eğer stok değeri yoksa 5 kabul et
      };
    });
  }, [products, sepet]);

  // Filtreleme işlemini dinamik stoklu ürünler üzerinden yapıyoruz
  const filteredProducts = useMemo(() => {
    return displayProducts.filter((p) => {
      const matchesCategory = selectedCategory === 'Tümü' || p.category === selectedCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [displayProducts, selectedCategory, searchQuery]);

  // --- SEPET FONKSİYONLARI ---
  const handleSepeteEkle = useCallback((urun) => {
    if (urun.stok <= 0) {
      alert("Bu ürünün stoğu tükenmiştir!");
      return;
    }

    setSepet((prevSepet) => {
      const varOlan = prevSepet.find((item) => item.id === urun.id);
      if (varOlan) {
        return prevSepet.map((item) =>
          item.id === urun.id ? { ...item, adet: item.adet + 1 } : item
        );
      }
      return [...prevSepet, { id: urun.id, title: urun.title, price: urun.price, adet: 1 }];
    });
  }, []);

  const handleAdetGuncelle = useCallback((productId, yeniAdet) => {
    const anaUrun = products.find((p) => p.id === productId);
    if (!anaUrun) return;

    if (yeniAdet <= 0) {
      setSepet((prev) => prev.filter((item) => item.id !== productId));
      return;
    }

    if (yeniAdet > anaUrun.stok) {
      alert(`Üzgünüz, bu üründen en fazla ${anaUrun.stok} adet ekleyebilirsiniz.`);
      return;
    }

    setSepet((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, adet: yeniAdet } : item
      )
    );
  }, [products]);

  const handleUrunCikar = useCallback((productId) => {
    setSepet((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  // Toplam sepet adedi (Header'daki sepet rozetine göndermek için)
  const toplamSepetAdedi = useMemo(() => {
    return sepet.reduce((sum, item) => sum + item.adet, 0);
  }, [sepet]);

  return (
    <>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
        setView={setView}
        sepetAdedi={toplamSepetAdedi} // Yeni prop
        onSepetAc={() => setSepetAcik(true)} // Yeni prop
      />
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setView={setView}
        categories={MOCK_CATEGORIES}
      />
      
      {view === "home" ? (
        <main className="main-layout">
          <Sidebar categories={MOCK_CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <div className="content-area">
            <div className="content-header">
              <h1 className="page-title">
                {selectedCategory} {searchQuery && ` "${searchQuery}"`} ürünler
              </h1>
              <span className="text-sm">Toplam {filteredProducts.length} Ürün</span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">Aradığınız kriterlere uygun ürün bulunamadı.</p>
              </div>
            ) : (
              // OnSepeteEkle propunu aşağıya aktardık
              <ProductGrid products={filteredProducts} onSepeteEkle={handleSepeteEkle} />
            )}
          </div>
        </main>
      ) : (
        <AddProductForm onAddProduct={handleAddProduct} categories={MOCK_CATEGORIES} setView={setView} />
      )}
      
      <Sepet
        sepet={sepet}
        isOpen={sepetAcik}
        onClose={() => setSepetAcik(false)}
        onAdetGuncelle={handleAdetGuncelle}
        onUrunCikar={handleUrunCikar}
      />

      <Footer />
    </>
  );
}

export default App;