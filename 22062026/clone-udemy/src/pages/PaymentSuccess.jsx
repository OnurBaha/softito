import React from 'react';

export default function PaymentSuccess() {
  return (
    <div className="status-card-box mx-auto">
      <div className="status-icon-circle-success">
        <span className="material-symbols-outlined !text-6xl">check_circle</span>
      </div>
      
      <h1 className="status-headline">Ödeme Başarılı!</h1>
      
      <p className="status-subtitle">
        Kursun artık profilinde. Öğrenmeye hemen başlayabilirsin!
      </p>
      
      <div className="status-summary-box">
        <div className="status-summary-row-header">
          <span className="text-label-md text-on-surface-variant">Sipariş Numarası</span>
          <span className="text-label-lg text-primary">#EF-9824105</span>
        </div>
        <div className="status-summary-item">
          <div 
            className="status-summary-item-img"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAonuEFxUslpuR-StMGRl1XGKZLyifyPsr9hPf-SJzdq3ceCrMgf3588jBB7IjdfUW3hv0zU5TRJ9oymWYoULOHsqcoHEm0iWZY3m7dj-9vzpMcUtqVDUhZuZv2myq6cZM6sVSrUvmHUlpKy5875njZ2O5cEbnIs5Ov7ELTL5r8CAfLmTUjAVp6pOpvFnBlI01CiU5bff5qKpEMGjjVTe3J3isDW2IUEOjqmS1T-iFnR3Lqh7D8lsOVEh0yEe2PZUcyMwxGdkKzWjwU')` }}
          ></div>
          <div className="flex-col-center-y">
            <span className="status-summary-item-title">İleri Seviye UI Tasarım ve Prototipleme</span>
            <span className="text-caption text-on-surface-variant">Kayıt Tarihi: 24 Mayıs 2026</span>
          </div>
        </div>
        <div className="status-summary-row-footer">
          <span className="text-label-md text-on-surface-variant">Toplam Ödeme</span>
          <span className="text-headline-md text-secondary">₺1,249.00</span>
        </div>
      </div>
      
      <div className="status-actions">
        <div className="status-btn-primary">
          Eğitime Başla
        </div>
        <div className="status-btn-secondary">
          Anasayfaya Dön
        </div>
      </div>
      
      <div className="status-footer">
        <div className="status-footer-badge">
          <span className="material-symbols-outlined !text-sm">verified_user</span>
          <span className="status-badge-text">Güvenli İşlem Tamamlandı</span>
        </div>
        <p className="text-caption text-outline">Faturanız e-posta adresinize gönderilmiştir.</p>
      </div>
    </div>
  );
}