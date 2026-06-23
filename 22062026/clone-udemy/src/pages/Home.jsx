import React from 'react';

export default function Home() {
  return (
    <div className="space-y-xl">
      <section className="mt-lg">
        <h2 className="text-headline-lg">Merhaba, Ahmet! 👋</h2>
        <p className="text-body-md">Bugün ne öğrenmek istersin?</p>
      </section>

      <section>
        <div className="search-bar-wrapper">
          <span className="material-symbols-outlined search-bar-icon">search</span>
          <input 
            type="text" 
            placeholder="Kurs, eğitmen veya konu ara..." 
            className="search-bar-input" 
          />
        </div>
      </section>

      <section className="category-chips-scroll no-scrollbar">
        <button className="category-chip-active">Tümü</button>
        <button className="category-chip">Tasarım</button>
        <button className="category-chip">Yazılım</button>
        <button className="category-chip">Pazarlama</button>
        <button className="category-chip">İşletme</button>
      </section>

      <section>
        <div className="hero-card block">
          <div className="hero-overlay"></div>
          <div 
            className="hero-bg-img"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMhSTJBrMvCxohdOiO08I77jgTYR1qxRzpZfQ1h7CRQHKJ1E3ALBNF_zgFiEYB1Q0PND57ZzMOccOY-zHdzm85MEiNqUtWVEEx6DiFW0Nmasld9IXDr3_Wy_c3gIOm7QI4LaUi49ViVQyOVeX2cx13MjxR0uRl95wccrcrEZgGay5oEhHuoHzn4ZBMQ08T0olw9bOrPHsOam9e74LcIWNoEbgFZVQ1GUFzBLT6q35Cj0XDTABX_IJS9S4B_dPSbBpA8uQ9ubwkKckB')` }}
          ></div>
          <div className="hero-text-container">
            <span className="badge-tag">ÖNE ÇIKAN</span>
            <h3 className="text-display-lg mt-2">UI/UX Tasarım Temelleri 2024</h3>
            <p className="hero-description">Profesyonel tasarımcı olmak için gereken her şey bu kursta.</p>
            <button className="btn-primary mt-4">Şimdi Başla</button>
          </div>
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2 className="text-headline-md">Popüler Kurslar</h2>
          <div className="section-link">Tümünü Gör</div>
        </div>
        <div className="courses-scroll-container no-scrollbar">
          <div className="course-card">
            <div className="course-card-img-wrapper">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhQPwyGG5o1HbU4-h8MOObahKD78oEfMkzeLMvXSACqNXpNwa_OpT0APRj2Jr3r44OU3F6YjJSCZ_RMVXDOYGn7EoJDnE9T1SUZYRt4_qM0lCiofbNH7sfGjxGyUoPnrJ1ORx5z3V7CRCvIGW9z9_tsxqmcSBgKE6XDI3RslRpv7qVcj76JGDPXbAVUVcs-RavQ1DKAagNuntoUJsmoP23IPpJ8zyoNBI0nBVWOHo411oRWWaszwKtHuTG7FU36YLDQCLg2m-8Q9VW" alt="İleri Seviye React.js" className="course-card-img" />
              <span className="badge-bestseller-absolute">ÇOK SATAN</span>
            </div>
            <div className="course-card-info">
              <div className="course-card-title">İleri Seviye React.js</div>
              <p className="course-card-author">Caner Yıldırım</p>
              <div className="course-card-rating-row">
                <span className="text-label-md text-secondary">4.8</span>
                <div className="course-card-rating-stars">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star_half</span>
                </div>
                <span className="text-caption text-outline">(2.450)</span>
              </div>
              <div className="course-card-footer">
                <span className="text-headline-md text-primary">₺249.99</span>
                <span className="material-symbols-outlined course-card-fav-btn">favorite</span>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-card-img-wrapper">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcDJ6WQc64dInelWRafZCLh8MDjSoOqxFSSci6QLhH6RU4_czjyuoPly3FQQXyxIgMK8Zjx70_6Bzw4hJ-4vdVsDBn8TI0PA-Y8FhKxHiB-w0dMNIwYXNBqdZAheqhBy2pUbvo3rGAtdxhAe1jfq2S_GEd6FdzdGFuwL9SrvpQTezquIQZRTSjL4K8M28k7BvlszB4F8gaeUr6rT71u7Dxhi_t-Oe4945YCQYq9MaWAsOfC8KIxHKGPx01t_tABSipeKba4g1kD7QU" alt="Dijital Pazarlama Uzmanlığı" className="course-card-img" />
            </div>
            <div className="course-card-info">
              <div className="course-card-title">Dijital Pazarlama Uzmanlığı</div>
              <p className="course-card-author">Selin Aras</p>
              <div className="course-card-rating-row">
                <span className="text-label-md text-secondary">4.9</span>
                <div className="course-card-rating-stars">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>
                <span className="text-caption text-outline">(1.120)</span>
              </div>
              <div className="course-card-footer">
                <span className="text-headline-md text-primary">₺189.99</span>
                <span className="material-symbols-outlined course-card-fav-btn">favorite</span>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-card-img-wrapper">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9ZdwcJLM3UeZV96cyjNP1CgSw6xyEibL-NCtwTpoqLwAd2W_8nDEcwXVmaPVU3J3f-QfROq3Pzum35T8RJJpSEf8vO3SHt73SQRVr6S6tNbs6P4EkqDO44HDqxof1CNXk-WUJKb2hKv1u7iWYHZfVODDJ4dETxapzb9jKWly7y9cEnu6vcsPfK-pukOopazZEfKW4l8sUDmMru08jHfMWr8sTo-7czihk88DH5oWh3BnxPnCHRilFPqPwKMakNso1ELHaQ3HoKeh4" alt="Sıfırdan İşletme Yönetimi" className="course-card-img" />
            </div>
            <div className="course-card-info">
              <div className="course-card-title">Sıfırdan İşletme Yönetimi</div>
              <p className="course-card-author">Dr. Mehmet Öz</p>
              <div className="course-card-rating-row">
                <span className="text-label-md text-secondary">4.6</span>
                <div className="course-card-rating-stars">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>
                <span className="text-caption text-outline">(890)</span>
              </div>
              <div className="course-card-footer">
                <span className="text-headline-md text-primary">₺319.99</span>
                <span className="material-symbols-outlined course-card-fav-btn">favorite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-md">
        <h2 className="text-headline-md mb-md">Kategorilere Göz At</h2>
        <div className="grid-cols-2-4">
          <div className="category-grid-item">
            <div className="category-grid-icon-circle">
              <span className="material-symbols-outlined">palette</span>
            </div>
            <span className="text-label-lg">Tasarım</span>
          </div>
          <div className="category-grid-item">
            <div className="category-grid-icon-circle">
              <span className="material-symbols-outlined">code</span>
            </div>
            <span className="text-label-lg">Yazılım</span>
          </div>
          <div className="category-grid-item">
            <div className="category-grid-icon-circle">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <span className="text-label-lg">Pazarlama</span>
          </div>
          <div className="category-grid-item">
            <div className="category-grid-icon-circle">
              <span className="material-symbols-outlined">business_center</span>
            </div>
            <span className="text-label-lg">İşletme</span>
          </div>
        </div>
      </section>

      <section>
        <div className="ongoing-card">
          <div className="flex-1">
            <span className="ongoing-subtitle">ÖĞRENMEYE DEVAM ET</span>
            <h4 className="text-title-lg mt-1">Python ile Veri Bilimi</h4>
            <div className="ongoing-progress-track">
              <div className="bg-secondary-container h-full" style={{ width: '65%' }}></div>
            </div>
            <p className="ongoing-progress-text">%65 tamamlandı</p>
          </div>
          <div className="ongoing-play-btn">
            <span className="material-symbols-outlined">play_arrow</span>
          </div>
        </div>
      </section>
    </div>
  );
}