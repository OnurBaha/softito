import { useMemo } from "react";

export default function Cart({
  cart,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveFromCart
}) {

  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const shippingLimit = 1500;
  const shippingFee = subtotal >= shippingLimit || subtotal === 0 ? 0 : 50;
  const remainingAmount = Math.max(0, shippingLimit - subtotal);
  const progressPercentage = Math.min((subtotal / shippingLimit) * 100, 100);

  if (!isOpen) return null;

  return (
    <>
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 animate-fade-in"
      />

      <div className="fixed top-0 right-0 h-screen w-full sm:w-[450px] bg-white z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 animate-slide-in border-l border-gray-100">
        
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div>
            <h3 className="text-lg font-black text-gray-900 tracking-tight">Sepetim</h3>
            <span className="text-xs text-gray-500 font-semibold">
              Toplam {cart.length} ürün bulunuyor
            </span>
          </div>
          <button 
            onClick={onClose} 
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 transition-all cursor-pointer shadow-xs font-bold"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 hidden-scroll flex flex-col gap-4">
          
          {cart.length > 0 && (
            <div className="bg-red-50/50 border border-red-100 rounded-2xl p-4 flex flex-col gap-2.5">
              {subtotal >= shippingLimit ? (
                <span className="text-sm font-bold text-green-600 flex items-center gap-1.5">
                   🎉 Tebrikler! Kargonuz Bedava!
                </span>
              ) : (
                <span className="text-xs font-medium text-gray-700">
                  🚚 Kargo bedava için <strong className="text-red-500 font-extrabold">{remainingAmount.toFixed(2)} ₺</strong> daha ürün ekleyin!
                </span>
              )}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    subtotal >= shippingLimit ? "bg-green-500" : "bg-red-500"
                  }`}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          )}

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 py-12 text-center gap-3">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-2xl font-bold">
                🛒
              </div>
              <span className="text-sm font-bold text-gray-800">Sepetiniz şu anda boş.</span>
              <p className="text-xs text-gray-400 max-w-[250px]">
                Hemen alışverişe başlayıp beğendiğiniz ürünleri sepetinize ekleyebilirsiniz.
              </p>
              <button 
                onClick={onClose}
                className="mt-2 text-xs font-bold text-red-500 hover:text-red-600 border border-red-200 hover:border-red-500 px-4 py-2 rounded-xl transition-colors cursor-pointer bg-white"
              >
                Alışverişe Devam Et
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div 
                key={item.id} 
                className="border border-gray-100 rounded-2xl p-4 flex gap-3 hover:border-gray-200 transition-all bg-white shadow-xs group"
              >
                <div className="flex-1 flex flex-col justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 leading-snug group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-xs text-gray-400 font-medium block mt-1">
                     Birim Fiyat: {item.price.toLocaleString('tr-TR')} ₺
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-xl p-0.5 w-max">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white text-gray-600 hover:text-red-500 transition-colors font-bold text-sm cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-gray-800 px-2.5 min-w-[28px] text-center select-none">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white text-gray-600 hover:text-red-500 transition-colors font-bold text-sm cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end shrink-0 min-w-[90px]">
                  <span className="text-sm font-extrabold text-gray-900 whitespace-nowrap">
                    {(item.price * item.quantity).toLocaleString('tr-TR')} ₺
                  </span>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="text-xs font-bold text-gray-400 hover:text-red-500 p-1 rounded-lg hover:bg-red-50/50 transition-colors cursor-pointer"
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-gray-50/30 flex flex-col gap-3.5 shadow-[0_-8px_20px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
                <span>Subtotal</span>
                <span className="font-mono text-gray-700">{subtotal.toLocaleString('tr-TR')} ₺</span>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
                <span>Kargo Bedava</span>
                <span className={`font-mono ${shippingFee === 0 ? "text-green-600 font-bold" : "text-gray-700"}`}>
                  {shippingFee === 0 ? "Free" : `${shippingFee.toFixed(2)} ₺`}
                </span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-1">
                <span className="text-sm font-black text-gray-900 uppercase tracking-tight">Toplam Tutar</span>
                <span className="text-xl font-black text-red-600 font-mono">
                  {(subtotal + shippingFee).toLocaleString('tr-TR')} ₺
                </span>
              </div>
            </div>
            
            <button
              onClick={() => alert("Your order has been received successfully! (n11-Clone)")}
              className="w-full bg-red-500 text-white font-bold py-3.5 rounded-xl hover:bg-red-600 transition-all shadow-xs cursor-pointer text-sm tracking-wide text-center active:scale-[0.99]"
            >
              Alışverişi Tamamla
            </button>
          </div>
        )}
      </div>
    </>
  );
}