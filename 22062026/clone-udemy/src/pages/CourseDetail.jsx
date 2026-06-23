export default function CourseDetail() {
  return (
    <div className="pb-32">
      <section className="relative w-full aspect-video overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuASUH_TBN_FZFGqteUpmP5S6gJeiZHbpv31TvpuPD82S9kYUnS5rLuTSwItbbITcpV-_SkeGOIMZ2Nz09LPhpgiQTeHQAq6tPKph2mhzZmO0E2NHk-NdsZJUMjCY7xboyV3ne_PTDPFoazKxplNObvzTkGydQSLDusi4vytY34rkGlo9MQxtWaU2yxhGkSD4DmOZHnmU8quF2Gx3ZUOC5tZrnaDsIRYPVQ6jNdxVpupqs9Z3RK3sc-z_uPoKIf8gnOaz7vC1VgBkaOY')` }}
        ></div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-secondary text-4xl">play_arrow</span>
          </div>
        </div>
      </section>

      <section className="py-lg">
        <div className="flex flex-wrap gap-2 mb-sm">
          <span className="badge-tag">En Çok Satan</span>
          <span className="badge-tag bg-surface-container-high text-on-surface-variant">Yazılım</span>
        </div>
        <h1 className="text-headline-lg text-primary mb-xs">İleri Seviye Web Geliştirme: React ve Next.js</h1>
        <p className="text-body-lg text-on-surface-variant mb-md">Modern web teknolojileri ile profesyonel seviyede tam donanımlı uygulamalar geliştirmeyi öğrenin.</p>
        <div className="flex flex-wrap items-center gap-2 mb-md">
          <span className="text-title-lg text-secondary">4.8</span>
          <div className="flex text-[#FFC107] scale-75 -ml-1">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star_half</span>
          </div>
          <span className="text-caption text-on-surface-variant">(12,450 değerlendirme)</span>
          <span className="text-outline-variant">•</span>
          <span className="text-caption text-on-surface-variant">45,892 öğrenci</span>
        </div>

        <div className="flex items-center gap-md p-md bg-white border border-outline-variant rounded-xl shadow-sm">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUBqNMEoI4RtT45gouUhVIsOtks9f9iZUjhoobqXe0nJLJJKnRA_BQ6wprq0aRtMMdVsQ4UvY_ytuZ28kgY3Fwo8RYX7c7S4gBO-yBDtGnKXHdmUdlwZxM7z6aNgXeOtx-cT2hlT08AJydSm17gQUlUZw48eJ3BHE9QT0GcyvEwdmmqpjkFc_HzsqnBbmjl9ijSLeZlWV_hhN8DL3kTgBhTnxsRvA1AzOIJsd9HYQk3Vvb77yt88zUNxHfpqrWOZdiPXEqydS_jwqS" 
              alt="Eğitmen" 
            />
          </div>
          <div>
            <span className="block text-caption text-on-surface-variant">Eğitmen</span>
            <span className="block text-title-lg text-primary">Dr. Arda Yılmaz</span>
            <span className="block text-label-md text-secondary">Senior Software Architect</span>
          </div>
          <button className="ml-auto text-secondary text-label-lg">Profili Gör</button>
        </div>
      </section>

      <section className="py-lg px-4 bg-surface-container-low rounded-xl mb-lg">
        <h2 className="text-headline-md text-primary mb-md">Bu kursta neler öğreneceksiniz?</h2>
        <div className="grid grid-cols-1 gap-md">
          <div className="flex gap-sm">
            <span className="material-symbols-outlined text-secondary flex-shrink-0">check_circle</span>
            <p className="text-body-md">Sıfırdan ileri seviyeye React ve modern kütüphane ekosistemi.</p>
          </div>
          <div className="flex gap-sm">
            <span className="material-symbols-outlined text-secondary flex-shrink-0">check_circle</span>
            <p className="text-body-md">Next.js 14 ile Sunucu Tarafı Render (SSR) ve Statik Site Üretimi (SSG).</p>
          </div>
          <div className="flex gap-sm">
            <span className="material-symbols-outlined text-secondary flex-shrink-0">check_circle</span>
            <p className="text-body-md">Tailwind CSS ile yüksek performanslı ve modern arayüz tasarımları.</p>
          </div>
          <div className="flex gap-sm">
            <span className="material-symbols-outlined text-secondary flex-shrink-0">check_circle</span>
            <p className="text-body-md">Redux Toolkit ve Context API ile karmaşık state yönetimi stratejileri.</p>
          </div>
        </div>
      </section>

      <section className="py-xl">
        <div className="flex justify-between items-end mb-md">
          <h2 className="text-headline-md text-primary">Kurs İçeriği</h2>
          <span className="text-label-md text-on-surface-variant">22 Bölüm • 142 Ders</span>
        </div>
        <div className="space-y-sm">
          <div className="curriculum-accordion">
            <div className="curriculum-section-header">
              <div className="text-left">
                <span className="block text-title-lg">Bölüm 1: Temeller ve Kurulum</span>
                <span className="text-caption text-on-surface-variant">4 Ders • 24 dk</span>
              </div>
              <span className="material-symbols-outlined rotate-180">expand_more</span>
            </div>
            <div className="px-md pb-md space-y-md border-t border-outline-variant pt-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-on-surface-variant">play_circle</span>
                  <span className="text-body-md">Geliştirme Ortamının Hazırlanması</span>
                </div>
                <span className="text-caption">05:12</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-on-surface-variant">play_circle</span>
                  <span className="text-body-md">React Neden Tercih Edilmeli?</span>
                </div>
                <span className="text-caption">08:45</span>
              </div>
            </div>
          </div>

          <div className="curriculum-accordion">
            <div className="curriculum-section-header">
              <div className="text-left">
                <span className="block text-title-lg">Bölüm 2: Component Mimarisi</span>
                <span className="text-caption text-on-surface-variant">12 Ders • 1 sa 15 dk</span>
              </div>
              <span className="material-symbols-outlined">expand_more</span>
            </div>
            <div className="px-md pb-md space-y-md border-t border-outline-variant pt-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-on-surface-variant">play_circle</span>
                  <span className="text-body-md">JSX Temelleri ve Kurallar</span>
                </div>
                <span className="text-caption">12:30</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-on-surface-variant">lock</span>
                  <span className="text-body-md">Props ve State Yönetimi</span>
                </div>
                <span className="text-caption">15:10</span>
              </div>
            </div>
          </div>

          <div className="curriculum-accordion opacity-70">
            <div className="curriculum-section-header cursor-not-allowed">
              <div className="text-left">
                <span className="block text-title-lg">Bölüm 3: Hooks ve API İstekleri</span>
                <span className="text-caption text-on-surface-variant">8 Ders • 52 dk</span>
              </div>
              <span className="material-symbols-outlined">lock</span>
            </div>
          </div>
        </div>
      </section>

      <div className="detail-footer">
        <div className="flex flex-col">
          <span className="detail-price-old">₺1.299,00</span>
          <span className="text-headline-lg text-primary">₺249,99</span>
        </div>
        <div className="flex gap-2">
          <button className="detail-cart-btn">
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
          <div className="detail-buy-btn">
            Hemen Al
          </div>
        </div>
      </div>
    </div>
  );
}