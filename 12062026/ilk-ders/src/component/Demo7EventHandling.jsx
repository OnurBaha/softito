function Demo7EventHandling() {
  const butonaTiklandi = (mesaj) => {
    alert(mesaj);
  };

  const formGonder = (event) =>{
    event.preventDefault();
    alert('Form Gönderildi, Sayfa Yenilenmedi');
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold">Demo 7: Olay Yönetimi</h3>
      <div className="mt-4">
        <h4 className="font-bold">Butona Tıklama Olayı</h4>
        <div className="flex flex-col">
          <button
            className="p-2 bg-blue-500"
            onClick={() => butonaTiklandi("Basit Tıklama")}
          >
            Tıkla Mesaj Ver
          </button>
          <button
            onClick={() => butonaTiklandi("Parametreli Tıklama")}
            className="p-2 bg-green-950"
          >
            Parametreli Tıklama
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="font-bold">Form Olayı (Submit)</h4>
        <form onSubmit={formGonder} className="p-2 border">
          <input
            type="text"
            className="p-2 border"
            placeholder="Metin Giriniz"
          />
          <button type="submit" className="p-2 bg-purple-800">
            Formu Gönder
          </button>
        </form>
      </div>
    </div>
  );
}

export default Demo7EventHandling;
