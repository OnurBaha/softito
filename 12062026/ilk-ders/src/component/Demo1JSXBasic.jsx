const Demo1JSXBasic = () => {
    const dersAdi="React dersi";
    const ogrenciSayisi = 24;
    const aktifMi = true;
    const dersYil = 2026;

    return(
        <div className="p-4">
            <h3 className="text-xl font-bold">Demo1: Temel JSX Kullanımı</h3>
            <div className="mt-4">
                <p className="border-b">Ders Adı:<strong>{dersAdi}</strong></p>
                <p className="border-b">Öğrenci Adı:<strong>{ogrenciSayisi}</strong></p>
                <p className="border-b">Ders Yılı:<strong>{dersYil}</strong></p>
                <p className="border-b">İşlem:<strong>{2+2}</strong></p>
                <p className="border-b">Ders Adı:<strong>{dersAdi.toUpperCase()}</strong></p>
                <p className="border-b">Ders Durum:<strong>{aktifMi ? "aktif" : "pasif"}</strong></p>
            </div>


        </div>
    )

}
export default Demo1JSXBasic;