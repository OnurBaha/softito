import React from 'react';

export default function CourseWatch() {
  return (
    <div className="pb-32">
      <section className="watch-video-section">
        <div 
          className="watch-video-bg"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZ1YQbly_kg6nTph68wojZnr4mJAlZgzqOvkPQDCRT3fnIGzCwr1-W44ZglQItcgF3o0B8SUBdf-ZCaiAqUazAVVTVcRdbjxL0w34xLwgNWKlzgX1nhnBedo32JDjKBrJPI8D-UWiurTx_RkKWDiwd5Ww7CeTwCrgW436vvs_XMvaTQZW6JyHx9Zgr6YUtxW4EvsSTcR6vcRlqxYHeSCxrkJ8kf50OI7SAYt7Ny3czmnDBN4-yPKVh5Y_ULLFJ_zEGPtfH52J8r1PD')` }}
        ></div>
        <div className="watch-video-play-overlay">
          <button className="player-play-btn">
            <span className="material-symbols-outlined text-4xl">play_arrow</span>
          </button>
        </div>
        
        <div className="player-controls">
          <div className="flex-gap-md">
            <span className="material-symbols-outlined text-sm">pause</span>
            <span className="text-label-md">12:45 / 24:30</span>
          </div>
          <div className="flex-gap-md">
            <span className="material-symbols-outlined text-sm">settings</span>
            <span className="material-symbols-outlined text-sm">fullscreen</span>
          </div>
        </div>
      </section>

      <section className="py-md">
        <div className="watch-info-header">
          <p className="watch-module-title">Modül 2: Web Geliştirme (ID: 1)</p>
          <h2 className="text-headline-md text-on-surface">Ders 4: CSS Temelleri ve Kutu Modeli</h2>
          <div className="flex-wrap-gap mt-1">
            <div className="flex-gap-sm">
              <span className="material-symbols-outlined watch-star-icon">star</span>
              <span className="text-label-md">4.9</span>
            </div>
            <span className="text-on-surface-variant text-caption">•</span>
            <span className="text-caption text-on-surface-variant">12.4k Öğrenci</span>
          </div>
        </div>

        <div className="watch-tabs no-scrollbar">
          <button className="watch-tab-btn-active">Ders Listesi</button>
          <button className="watch-tab-btn">Notlar</button>
          <button className="watch-tab-btn">Kaynaklar</button>
        </div>

        <div className="mt-md space-y-sm">
          <div className="playlist-lesson-item">
            <div className="watch-lesson-icon-completed">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div className="flex-grow">
              <p className="text-body-md font-semibold">1. Giriş ve Kurulum</p>
              <p className="text-caption text-on-surface-variant">08:12 • Tamamlandı</p>
            </div>
          </div>

          <div className="playlist-lesson-item">
            <div className="watch-lesson-icon-completed">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div className="flex-grow">
              <p className="text-body-md font-semibold">2. HTML Yapısı</p>
              <p className="text-caption text-on-surface-variant">15:45 • Tamamlandı</p>
            </div>
          </div>

          <div className="playlist-lesson-item-active">
            <div className="watch-lesson-icon-watching">
              <span className="material-symbols-outlined">play_arrow</span>
            </div>
            <div className="flex-grow">
              <p className="text-body-md font-semibold">4. CSS Temelleri ve Kutu Modeli</p>
              <p className="text-caption text-on-surface-variant">24:30 • İzleniyor</p>
            </div>
          </div>

          <div className="playlist-lesson-item">
            <div className="watch-lesson-icon-locked">
              <span className="material-symbols-outlined">lock</span>
            </div>
            <div className="flex-grow">
              <p className="text-body-md font-semibold">5. Flexbox ile Layout</p>
              <p className="text-caption text-on-surface-variant">18:20 • Kilitli</p>
            </div>
          </div>

          <div className="playlist-lesson-item">
            <div className="watch-lesson-icon-locked">
              <span className="material-symbols-outlined">lock</span>
            </div>
            <div className="flex-grow">
              <p className="text-body-md font-semibold">6. Grid Sistemleri</p>
              <p className="text-caption text-on-surface-variant">22:10 • Kilitli</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="watch-footer">
        <button className="watch-footer-btn-nav">
          <span className="material-symbols-outlined">skip_previous</span>
          <span className="text-label-md">Önceki</span>
        </button>
        <button className="watch-footer-play-btn">
          <span className="material-symbols-outlined">pause</span>
        </button>
        <button className="watch-footer-btn-nav">
          <span className="material-symbols-outlined">skip_next</span>
          <span className="text-label-md">Sonraki</span>
        </button>
        <div className="watch-footer-btn-nav">
          <span className="material-symbols-outlined">playlist_add_check</span>
          <span className="text-label-md">Bitir</span>
        </div>
      </footer>
    </div>
  );
}