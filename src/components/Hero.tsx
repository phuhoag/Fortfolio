import devSvg from '../assets/dev.svg';

export default function Hero() {
  return (
    <section id="about" className="section hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">Xin chào, tôi là Developer Full‑stack</h1>
          <p className="hero-subtitle">
            Tôi xây dựng ứng dụng web hiện đại với React, Node.js và hạ tầng đám mây.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">Xem dự án</a>
            <a href="#contact" className="btn">Liên hệ</a>
          </div>
        </div>
        <div className="hero-art">
          <img src={devSvg} alt="Developer illustration" className="hero-image" />
        </div>
      </div>
    </section>
  );
}


