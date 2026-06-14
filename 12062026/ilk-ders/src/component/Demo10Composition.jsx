import React from 'react'

const ModalKutusu = (props) => {
    return (
        <div className="border border-gray-400 p-4 rounded shadow-lg bg-white max-w-sm">
            {props.children}
        </div>
    )
}

const ModalButon = ({ metin, tip = "primary", TiklamaAksiyonu }) => {
    const butonRengi = tip === "danger" ? "bg-red-600 text-white" : "bg-blue-600 text-white";
    
    return (
        <button 
            onClick={TiklamaAksiyonu} 
            className={`p-2 m-1 rounded text-sm ${butonRengi}`}
        >
            {metin}
        </button>
    )
}

const SilmeOnayModali = ({ urunAdi, onOnayla, onIptal }) => {
    return (    
        <ModalKutusu>
            <h4 className="font-bold text-red-600 text-lg">⚠️ Dikkat!</h4>
            <p className="text-gray-700 my-2">
                <strong>{urunAdi}</strong> isimli ögeyi silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
            </p>
            <div className="flex justify-end mt-4">
                <ModalButon metin="İptal Et" tip="primary" TiklamaAksiyonu={onIptal} />
                <ModalButon metin="Evet, Sil" tip="danger" TiklamaAksiyonu={onOnayla} />
            </div>
        </ModalKutusu>
    )
}

function Demo10Composition() {
    const silmeyiOnayla = () => alert("Öge başarıyla silindi!");
    const iptalEt = () => alert("Silme işlemi iptal edildi.");

    return (
        <div className="p-4">
            <h3 className="text-xl font-bold mb-4">Demo 10: React Composition (Bileşen Kompozisyonu)</h3>
            
            <div className="grid gap-6">
                <div>
                    <h4 className="font-bold mb-2 text-sm text-gray-500">1. Esnek Kullanım (Dışarıdan İçerik Enjekte Etme)</h4>
                    <ModalKutusu>
                        <h4 className="font-bold">Duyuru!</h4>
                        <p className="text-sm text-gray-600">Bu akşam React etüdü yapılacaktır, katılım zorunludur.</p>
                        <ModalButon metin="Anladım" TiklamaAksiyonu={() => alert("Etüt kaydedildi.")} />
                    </ModalKutusu>
                </div>

                <div>
                    <h4 className="font-bold mb-2 text-sm text-gray-500">2. Özelleştirilmiş Yapı (Bileşenleri Birleştirerek Yeni Yapı Üretme)</h4>
                    <SilmeOnayModali 
                        urunAdi="Laptop (Monster Abra)" 
                        onOnayla={silmeyiOnayla} 
                        onIptal={iptalEt} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Demo10Composition