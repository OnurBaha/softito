import { useState } from "react";

function KullaniciListesi() {
  const [kullanicilar, setKullanicilar] = useState([
    { id: 1, isim: "Ahmet", rol: "Geliştirici" },
    { id: 2, isim: "Ayşe", rol: "Tasarımcı" },
    { id: 3, isim: "Mehmet", rol: "Analist" },
  ]);

  const [yeniIsim, setYeniIsim] = useState("");
  const [yeniRol, setYeniRol] = useState("");

  const kullaniciEkle = (e) => {
    e.preventDefault();

    if (yeniIsim.trim() === "" || yeniRol.trim() === "") return;

    const yeniKullanici = {
      id: Date.now(),
      isim: yeniIsim,
      rol: yeniRol,
    };

    setKullanicilar([...kullanicilar, yeniKullanici]);

    setYeniIsim("");
    setYeniRol("");
  };

  const kullaniciSil = (id) => {
    const guncelListe = kullanicilar.filter((kullanici) => kullanici.id !== id);
    setKullanicilar(guncelListe);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6 border border-gray-100">
      
      <div className="flex justify-between items-center border-b pb-3">
        <h3 className="text-xl font-bold text-gray-800">Kullanıcı Yönetimi</h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {kullanicilar.length} Kişi
        </span>
      </div>

      <form onSubmit={kullaniciEkle} className="space-y-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Yeni Kullanıcı Ekle</h4>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            value={yeniIsim}
            onChange={(e) => setYeniIsim(e.target.value)}
            placeholder="İsim Girin"
            className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            value={yeniRol}
            onChange={(e) => setYeniRol(e.target.value)}
            placeholder="Rol Girin (Örn: Stajyer)"
            className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-sm"
        >
          Ekle
        </button>
      </form>
      
      {kullanicilar.length === 0 ? (
        <p className="text-gray-500 text-center py-4 text-sm bg-gray-50 rounded-lg">
          Listede aktif kullanıcı kalmadı.
        </p>
      ) : (
        <ul className="divide-y divide-gray-100">
          {kullanicilar.map((kullanici) => (
            <li 
              key={kullanici.id} 
              className="flex justify-between items-center py-3 first:pt-0 last:pb-0"
            >
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">{kullanici.isim}</span>
                <span className="text-xs text-gray-500">{kullanici.rol}</span>
              </div>
              
              <button 
                onClick={() => kullaniciSil(kullanici.id)}
                className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs font-medium transition-colors duration-200"
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default KullaniciListesi;