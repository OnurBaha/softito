import React from 'react';

export default function CourseList() {
  return (
    <div className="space-y-md">
      <section className="filter-bar no-scrollbar">
        <button className="category-chip-active">En Yeni</button>
        <button className="category-chip">En Çok Değerlendirilen</button>
        <button className="category-chip">Fiyat</button>
        <button className="category-chip">Kategori</button>
      </section>

      <section>
        <p className="text-on-surface-variant text-label-lg">1,245 sonuç bulundu</p>
      </section>

      <section className="space-y-md">
        <div className="course-card-horizontal block">
          <div className="course-card-horizontal-img-wrapper">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBim65JwVZWTlnO9WZmMH9XusDFg2ExDcKdooGuiqs4zzSbVpDZ4mNUS79aSSzvxzzbXAiMVMvu2qOL8vdu7Fg_fFbisB_ZAA616rNiWrGgpEqKf-YK34pSoImLE4ELtzDEY_gtnboso8HcN_ZbOqrJRA9bGWH7SjVtt605qEqtCGjTITjwUR2AyvGT0itrHmMBXupBD8IWwtlsOHWeHi2kaapAvD9hVF4JEF8DaxzAK4o4MKK0YYtecskmeznz9infAIl8GRpQ2H6h" alt="UI/UX Tasarım" className="course-card-horizontal-img" />
          </div>
          <div className="course-card-horizontal-content">
            <div>
              <h3 className="course-card-horizontal-title">Sıfırdan İleri Seviye UI/UX Tasarım Eğitimi 2024</h3>
              <p className="course-card-horizontal-author">Deniz Aksoy, Senior Product Designer</p>
            </div>
            <div className="card-info-bottom-stack">
              <div className="rating-wrapper-row">
                <span className="text-label-md text-on-surface">4.8</span>
                <div className="stars-wrapper">
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star_half</span>
                </div>
                <span className="text-caption text-on-surface-variant">(12,450)</span>
              </div>
              <div className="card-price-row">
                <p className="text-title-lg text-primary">₺429,99</p>
                <span className="badge-tag">En Popüler</span>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card-horizontal block">
          <div className="course-card-horizontal-img-wrapper">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaAE_-hNhQOOXkPi85uXdzgKkwcKplMmpfzISdfXxFJnct4ptEm2PQpW779PtcVpQDyUfMUI-1jWrqTPyWNO-f5n1o_kZuc6KrfnVVVv0vsaJwk6RROG-Hc2zP0MLvsfCrjlmq9y34-MHlgvDEK9-mU0c4lfJQn3vrE92AX-Ka8QHxId1B7kR_4Xd2sXuXljxUwEXbCl4Z-p-X5zspLGvSXfUHw7zp1CvzFle2AhiA3NYdYibfeLBbz3cQDwmt5AraNc3uZ1qtUGAF" alt="Figma" className="course-card-horizontal-img" />
          </div>
          <div className="course-card-horizontal-content">
            <div>
              <h3 className="course-card-horizontal-title">Figma ile Modern Mobil Uygulama Tasarımı</h3>
              <p className="course-card-horizontal-author">Mert Yılmaz</p>
            </div>
            <div className="card-info-bottom-stack">
              <div className="rating-wrapper-row">
                <span className="text-label-md text-on-surface">4.6</span>
                <div className="stars-wrapper">
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                </div>
                <span className="text-caption text-on-surface-variant">(3,120)</span>
              </div>
              <div className="card-price-row">
                <p className="text-title-lg text-primary">₺289,99</p>
                <span className="badge-tag bg-surface-container-high text-on-surface-variant">Yeni</span>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card-horizontal block">
          <div className="course-card-horizontal-img-wrapper">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIlCSA8GpSNMslQaN2SenqcM4_H_rp8flWxv7z0-sIu0RvGETLE_2wwJqva0RzOq9aAdAsMpMCx8J0Dw-Rm1aeFIXQTf7tXfDT4BuWe1Om23uTYz2n58h_M7vajwAmxeOuh9-3ImSXO_SETfcYlkHs49y5SeuBuwGa-jxIyg3iHRK9DVQ_5P83uZ-_Cd4QTgunBHTeHGaVJtoe00O_0hcGcTzbMZE4O4N3NtAp4AwRaWgX2gUo7obvIvP_ozaOENHz0dQgtRMKjbmB" alt="UX Stratejileri" className="course-card-horizontal-img" />
          </div>
          <div className="course-card-horizontal-content">
            <div>
              <h3 className="course-card-horizontal-title">Tasarım Odaklı Düşünme ve UX Stratejileri</h3>
              <p className="course-card-horizontal-author">Zeynep Kılıç</p>
            </div>
            <div className="card-info-bottom-stack">
              <div className="rating-wrapper-row">
                <span className="text-label-md text-on-surface">4.9</span>
                <div className="stars-wrapper">
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                </div>
                <span className="text-caption text-on-surface-variant">(856)</span>
              </div>
              <div className="card-price-row">
                <p className="text-title-lg text-primary">₺549,99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card-horizontal block">
          <div className="course-card-horizontal-img-wrapper">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuEosiSReSrMNtDWqfaqBt_VRysx1myZ6h9ONZObHaE8oa5ap4vJ0yVfreFiIvyLENPFK4Z5qgJtfBDKTEZn8Qm8W1Awagt3tkRi_xP0wOj6tZrhIl022T1Hm7rVsNT-uBKb-7LW6cbTdVq0QBARkGYX4hVFRK4w5eKTYyoSPuq1ivbx9BJWUckvf_tc_Mi69nlaNWMfnDB8rjtY_OoW6KQVB22pAznw10EyCs_YqyQZBBWmFlYiUN-115bqowKKdaI1zShAatEkHJ" alt="E-Ticaret UX" className="course-card-horizontal-img" />
          </div>
          <div className="course-card-horizontal-content">
            <div>
              <h3 className="course-card-horizontal-title">E-Ticaret UX: Dönüşüm Odaklı Tasarım Rehberi</h3>
              <p className="course-card-horizontal-author">Can Erdem</p>
            </div>
            <div className="card-info-bottom-stack">
              <div className="rating-wrapper-row">
                <span className="text-label-md text-on-surface">4.7</span>
                <div className="stars-wrapper">
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="material-symbols-outlined text-[14px]">star_half</span>
                </div>
                <span className="text-caption text-on-surface-variant">(4,821)</span>
              </div>
              <div className="card-price-row">
                <p className="text-title-lg text-primary">₺199,99</p>
                <span className="badge-tag bg-error-container text-on-error-container">Sınırlı Süre</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}