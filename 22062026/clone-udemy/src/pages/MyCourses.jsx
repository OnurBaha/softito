import React from 'react';

export default function MyCourses() {
  return (
    <div className="space-y-lg">
      <div className="pt-lg">
        <h2 className="text-display-lg text-primary">Eğitimlerim</h2>
      </div>

      <section className="category-chips-scroll no-scrollbar">
        <button className="category-chip-active">Tümü</button>
        <button className="category-chip">Devam Edenler</button>
        <button className="category-chip">Tamamlananlar</button>
      </section>

      <section className="grid-cols-1-2-3">
        <div className="course-card">
          <div className="mycourses-card-img-wrapper">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6By69B89oHvSI_sjbbwWTINQxk5QFWAxPOPyIn4bwvmCPLUQB2V_JHx6nJBnYYyqXJ4Vzc2yjQi9w_GPuUBgc7G-yNaiOHY7Sn0m3sNLFyo3Hvn0EKJlFjJGL3Umo5Qd29BX9hit3aGEnlQc5ljeUuY2d-wGuDs8UOGyAL7QhKsgpDBREVVeu311Z1m5iPg8daa1P4dgGpJvLOXDfPghB1iZa2aQgckk-UElPAYuSRAzGCG1NRG4czefKwrSWLqWz2GMU1gNkGzBe" alt="İleri Seviye UI/UX Tasarım ve Prototipleme" className="course-card-img" />
            <div className="mycourses-card-badge">
              <span className="mycourses-card-badge-text">Tasarım</span>
            </div>
          </div>
          <div className="mycourses-card-body">
            <div className="course-card-title">İleri Seviye UI/UX Tasarım ve Prototipleme</div>
            <p className="text-caption text-on-surface-variant">Ahmet Yılmaz</p>
            <div className="mt-4">
              <div className="mycourses-progress-header">
                <span className="text-label-md text-secondary">%65 tamamlandı</span>
                <span className="text-label-md text-on-surface-variant">24/38 Ders</span>
              </div>
              <div className="mycourses-progress-track">
                <div className="h-full bg-secondary" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card">
          <div className="mycourses-card-img-wrapper">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhxcekq42XLmT7sF09hiLQYqanViW5cv5TDuRpkN--UwT2sUH8a67poysNWyPtZkWY_LTIffL3jZum8giuzhDMPm9hUK1PgydTEju0qT-p0GxwWD-2AnyZsH8h5Lvj6x0gERz8CmJ_q8RYzl8PDJ0dK9ofwHZgP0z5bGwsUOKt-0CNMubaWcIoL32mhGOB2zEuoWjqxQ5v7pqlXskQBTjaKp1oibbdKO468_RWRbLqDqq4GCM3M3QFmB4eBu03J9ktoidWT9ckkY_J" alt="React Native ile Mobil Uygulama Geliştirme" className="course-card-img" />
            <div className="mycourses-card-badge">
              <span className="mycourses-card-badge-text">Geliştirme</span>
            </div>
          </div>
          <div className="mycourses-card-body">
            <div className="course-card-title">React Native ile Mobil Uygulama Geliştirme</div>
            <p className="text-caption text-on-surface-variant">Elif Demir</p>
            <div className="mt-4">
              <div className="mycourses-progress-header">
                <span className="text-label-md text-secondary">%20 tamamlandı</span>
                <span className="text-label-md text-on-surface-variant">4/20 Ders</span>
              </div>
              <div className="mycourses-progress-track">
                <div className="h-full bg-secondary" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card">
          <div className="mycourses-card-img-wrapper">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6V91U6ftJzmWlQiGkNpd0iRrq4P8jlaEqE_t3ZebZkrRaj2jcTXn3FeaoEWGAX5215TVg4a6v6eeBPtTo0O6VC_dEIAXEWWBYm36ZAlhkA2sprwMWx9csIK7j1WM8EVRbUf8IFo_IqWzpbzYpXeKwdXrxeKl49tw0_v-MIKO2yCqxVV6KCyuSFeTEStEvn-Yew7HQtdAz9jyLLwRvx8y-gv_RJRQnwQPcf42pxwtWbxgL-527GypCMvLpTHQ2_tJ9r7rP_gtRKTIN" alt="Modern Proje Yönetimi ve Agile Metodolojileri" className="course-card-img" />
            <div className="mycourses-card-badge">
              <span className="mycourses-card-badge-text">İşletme</span>
            </div>
          </div>
          <div className="mycourses-card-body">
            <div className="course-card-title">Modern Proje Yönetimi ve Agile Metodolojileri</div>
            <p className="text-caption text-on-surface-variant">Caner Özkan</p>
            <div className="mt-4">
              <div className="mycourses-progress-header">
                <span className="text-label-md text-secondary">%92 tamamlandı</span>
                <span className="text-label-md text-on-surface-variant">22/24 Ders</span>
              </div>
              <div className="mycourses-progress-track">
                <div className="h-full bg-secondary" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card">
          <div className="mycourses-card-img-wrapper-completed">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd5Ibwuzb2rLlVgpbEoG57JpvsSArknZKm2iynbaE90_L4S8gnG9Rgn3Cf2kzdvwi5kfIGvdUITvZJQdvsWuVr9akdQ0kJ5pamMeZ3vDid7SdBs9qKdI4jto1ySn4sIAAAWirRuPrNl66E_beDTZS8HXWxfPYSW5wur7c25bGJ8sEwddZfxxVeQYwRDNdlfX-NBEul1AffOHiHmaG0ewFHkf3hoBGgyDz0i8Vz0QU2USpvyLeiWrSKZrUs4LtXYXXUmLIt65Y4csKl" alt="Dijital Fotoğrafçılık Temelleri" className="course-card-img" />
            <div className="mycourses-completed-overlay">
              <div className="mycourses-completed-icon-circle">
                <span className="material-symbols-outlined mycourses-completed-icon">check_circle</span>
              </div>
            </div>
            <div className="mycourses-card-badge">
              <span className="mycourses-card-badge-text">Fotoğrafçılık</span>
            </div>
          </div>
          <div className="mycourses-card-body">
            <h3 className="course-card-title text-on-surface-variant">Dijital Fotoğrafçılık Temelleri</h3>
            <p className="text-caption text-on-surface-variant">Selin Aras</p>
            <div className="mt-4">
              <div className="mycourses-progress-header">
                <span className="text-label-md text-secondary">Tamamlandı</span>
                <span className="text-label-md text-on-surface-variant">15/15 Ders</span>
              </div>
              <div className="mycourses-progress-track-completed">
                <div className="h-full bg-secondary w-full"></div>
              </div>
              <button className="mycourses-btn-certificate">
                Sertifikayı Görüntüle
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}