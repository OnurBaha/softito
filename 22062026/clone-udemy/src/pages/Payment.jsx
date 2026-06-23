import React from 'react';

export default function Payment() {
  return (
    <div className="payment-main-wrapper">
      <div className="payment-grid-layout">
        <div className="payment-left-col">
          <section>
            <h2 className="text-title-lg mb-md text-on-surface">Sipariş Özeti</h2>
            <div className="payment-summary-box">
              <div className="payment-summary-img-wrapper">
                <img 
                  className="payment-summary-img" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZFPvAoOMijmpie_8AyKHYf5k_W9M_on6ODhwW-iX6EvtIiedFOR4-e3HR0m0Vxwuwv5m3hBhpsjDSP80Vtlj4ndnb1K_gXPGgvd8D5ghDG0k2ANl1-1uuJQEhECGUFY8DFYqQSLr9rJrouZxkEDNEgExMA1s2Lhg01Opwv7eHDKb-_J7ot8mNSUsRvp9cYrA0rkusA53nBuo2f8FZHgs0r_YxvGPXcXdc2p4MgRqHIct7axtbNV3dSAk9bkDHftEBQKBegj_sjL3b" 
                  alt="Sipariş Özeti"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-label-lg text-primary mb-1">İleri Seviye Veri Bilimi ve Makine Öğrenmesi</h3>
                <p className="text-caption text-on-surface-variant mb-2">Eğitmen: Dr. Arda Yılmaz</p>
                <div className="flex-between">
                  <span className="text-headline-md text-secondary">₺1,249.00</span>
                  <span className="badge-tag">En Çok Satan</span>
                </div>
              </div>
            </div>
          </section>

          <section className="secure-badge-box">
            <div className="payment-security-badges">
              <div className="payment-security-badge-item">
                <span className="material-symbols-outlined text-success" style={{ color: '#2e7d32' }}>lock</span>
                <span className="text-caption">256-bit SSL Güvenlik</span>
              </div>
              <div className="payment-security-brands">
                <span className="text-caption font-bold">VISA</span>
                <span className="text-caption font-bold">Mastercard</span>
              </div>
            </div>
            <p className="text-caption text-on-surface-variant">
              Ödemeniz güvenli altyapımız tarafından işlenmektedir. Kişisel verileriniz EduFlow gizlilik politikası çerçevesinde korunur.
            </p>
          </section>
        </div>

        <div className="payment-right-col">
          <section>
            <h2 className="text-title-lg mb-md text-on-surface">Ödeme Yöntemi</h2>
            <div className="flex gap-md">
              <button className="payment-method-btn-active">
                <span className="material-symbols-outlined text-secondary mb-2">credit_card</span>
                <span className="text-label-lg">Kredi Kartı</span>
              </button>
              <button className="payment-method-btn">
                <span className="material-symbols-outlined text-on-surface-variant mb-2">account_balance_wallet</span>
                <span className="text-label-lg">Dijital Cüzdan</span>
              </button>
            </div>
          </section>

          <section className="space-y-md">
            <div>
              <label className="input-label">Kart Üzerindeki İsim</label>
              <input type="text" placeholder="AD SOYAD" className="text-input-field" />
            </div>
            <div>
              <label className="input-label">Kart Numarası</label>
              <div className="relative">
                <input type="text" placeholder="0000 0000 0000 0000" className="text-input-field" />
                <div className="payment-input-icon-wrapper">
                  <span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
                </div>
              </div>
            </div>
            <div className="payment-grid-cols-2">
              <div>
                <label className="input-label">Son Kullanma Tarihi</label>
                <input type="text" placeholder="AA / YY" className="text-input-field text-center" />
              </div>
              <div>
                <label className="input-label">CVV</label>
                <input type="password" placeholder="***" maxLength="3" className="text-input-field text-center" />
              </div>
            </div>
          </section>

          <div className="payment-footer">
            <div className="payment-footer-container">
              <div className="payment-footer-row">
                <span className="text-body-md text-on-surface-variant">Toplam Tutar</span>
                <span className="text-headline-lg text-primary">₺1,249.00</span>
              </div>
              <div className="payment-footer-buttons">
                <div className="btn-primary flex-grow">
                  <span>Ödemeyi Tamamla (Başarılı)</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
                <div className="btn-secondary">
                  <span>Başarısız Test</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}