import { useState } from "react";
import "./App.css";
import AddProductForm from "./components/AddProductForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Sidebar from "./components/Sidebar";
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "./productsMock";

function App() {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [view, setView] = useState('home');
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleAddProduct = (data) =>{
    const newProduct = {
      id: Date.now(),
      title: data.title,
      price: Number(data.price),
      category: data.category,
      rating: 5.0,
      ratingCount: 1,
      image: data.image,
      description: data.description,
    }
    setProducts([newProduct, ...products])
  }


  const filteredProducts = products.filter((p)=>{
    const matchesCategory = selectedCategory === 'Tümü' || p.category === selectedCategory
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch;
  })

  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    setSearchQuery(searchInput);
  }

  return (
    <>
      <Header
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      handleSearchSubmit={handleSearchSubmit}
      setSearchQuery={setSearchQuery}
      setSelectedCategory={setSelectedCategory}
      setView={setView}
       />
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setView={setView}
        categories={MOCK_CATEGORIES}
      />
      {view === "home" ? (
        <main className="main-layout">
          <Sidebar categories={MOCK_CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
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
                </div>):(
            <ProductGrid products={filteredProducts} />
            )}
          </div>
        </main>
      ) : (
        <AddProductForm onAddProduct={handleAddProduct} categories={MOCK_CATEGORIES} setView={setView} />
      )}
      <Footer />
    </>
  );
}

export default App;

//Sepet Ekleme - Hesaplama kısımları yapılacak
