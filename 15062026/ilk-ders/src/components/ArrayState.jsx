import { useState } from "react";

function ArrayState() {
  const [gorevler, setGorevler] = useState([
    { id: 1, baslik: "useState Çalışma Mantığını Öğren", tamamlandi: true },
    { id: 2, baslik: "Dizi State Yapısını Öğren", tamamlandi: false },
    { id: 3, baslik: "Form Event Handling Yapılarını İncele", tamamlandi: false},
  ]);

  const [yeniGorev, setYeniGorev] = useState("");

  const gorevEkle = (e) => {
    e.preventDefault();
    if (yeniGorev.trim() === "")
    return;

    const yeni = {
      id: Date.now(),
      baslik: yeniGorev,
      tamamlandi: false,
    };

    setGorevler([...gorevler, yeni]);
    setYeniGorev("");
  };


   const gorevTamamlandi = (id) => {
      setGorevler(
        gorevler.map((g) =>
          g.id === id ? { ...g, tamamlandi: !g.tamamlandi } : g),
      );
    };
    
    const gorevSil = (id) =>{
        setGorevler(gorevler.filter(g=>g.id !== id));
    };

    const tamamlananlarSayisi = gorevler.filter(g => g.tamamlandi).length;


  return (
    <div className="p-4">
      <h3 className="demo-title">Demo 4: Dizi (Array) State Yönetimi</h3>
      <div className="demo-card demo-card-xl space-y-4">
        <div className="card-header-list">
            <h4 className="demo-section-title">Yapılacaklar Listesi</h4>
            <span className="demo-count-span">
                {tamamlananlarSayisi} / {gorevler.length} Tamamlandı
            </span>
        </div>

        <form onSubmit={gorevEkle} className="flex gap-2">
            <input type="text" value={yeniGorev} onChange={(e) => setYeniGorev(e.target.value)} placeholder="Yeni bir görev ekleyin" className="demo-input" />
            <button className="btn-blue-submit" type="submit">Ekle</button>
        </form>

        {gorevler.length === 0 ? (
            <p className="empty-list-text">Henüz görev eklenmemiş</p>
        ) : (
            <div className="todo-list-container">
                {gorevler.map((g)=> (
                    <div key={g.id} className={`todo-item ${g.tamamlandi ? "todo-item-completed" : ""}`}>
                        <div className="todo-item-left">
                            <input type="checkbox" checked={g.tamamlandi} onChange={() => gorevTamamlandi(g.id)} className="todo-checkbox" />
                            <span className="todo-item-text">{g.baslik}</span>
                        </div>
                        <button onClick={() => gorevSil(g.id)} className="btn-delete-todo">Sil</button>
                    </div>
                ))}
            </div>
        )}
      </div>

    </div>
  );
}

export default ArrayState;
