export default function OrderTracking() {
  return (
    <>
      <main className="tracking-container">
        <div className="tracking-card">
          <h2 className="form-title">Sipariş Takibi</h2>
          <form>
            <div className="form-group">
              <label className="form-label">Sipariş Numarası</label>
              <input
                type="text"
                placeholder="Örn:12345"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">E-Posta Adresi</label>
              <input
                type="email"
                placeholder="Ahmet@Yilmaz.com"
                className="form-input"
              />
            </div>
            <button className="form-submit" type="submit">
              Siparişi Sorgula
            </button>
          </form>
        </div>

        <div className="tracking-card">
          <h3 className="value-title">Sipariş Durumu: Hazırlanıyor...</h3>
          <div className="timeline">
            <div className="timeline-step">
              <div className="timeline-icon timeline-icon-active">1</div>
              <span className="timeline-label timeline-label-active">
                Sipariş Alındı
              </span>
            </div>
            <div className="timeline-step">
              <div className="timeline-icon timeline-icon-active">2</div>
              <span className="timeline-label timeline-label-active">
                Hazırlanıyor
              </span>
            </div>
            <div className="timeline-step">
              <div className="timeline-icon">3</div>
              <span className="timeline-label">
                Kargoya Verildi
              </span>
            </div>
            <div className="timeline-step">
              <div className="timeline-icon">4</div>
              <span className="timeline-label">
                Teslim Edildi
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
