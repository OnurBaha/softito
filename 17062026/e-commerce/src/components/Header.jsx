export default function Header({
  searchInput,
  setSearchInput,
  handleSearchSubmit,
  setSelectedCategory,
  setSearchQuery,
  setView,
  cartQuantity,
  onCartOpen,
}) {
  const handleLogoClick = () => {
    setView("home");
    setSelectedCategory("All");
    setSearchQuery("");
    setSearchInput("");
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo" onClick={handleLogoClick}>
            n11<span className="logo-accent">Clone</span>
          </div>
          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search product, category or brand..."
              className="search-input"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button type="submit" className="search-button">Search</button>
          </form>
          <div className="header-actions">
            <div className="action-item" onClick={() => setView('addProduct')}>
              <span>Yeni Ürün</span>
            </div>
            <div className="action-item">
              <span>Giriş Yap</span>
            </div>
            <div className="action-item" onClick={onCartOpen} style={{ cursor: 'pointer' }}>
              <span>Sepetim</span>
              <span className="badge">{cartQuantity}</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}