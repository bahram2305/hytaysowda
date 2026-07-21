export function generateSingleFileHTML(): string {
  return `<!DOCTYPE html>
<html lang="tk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hytaý Kompaniýasynda Täze Iş Mümkinçilikleri!</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* Global Styles */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #f8fafc;
      color: #1e293b;
      line-height: 1.6;
      padding-bottom: 80px; /* Space for mobile sticky bar */
    }
    h1, h2, h3, h4 {
      font-family: 'Montserrat', sans-serif;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    
    /* Container */
    .container {
      width: 100%;
      max-width: 1140px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Colors */
    :root {
      --primary-green: #2e7d32;
      --primary-green-dark: #1b5e20;
      --accent-orange: #f59e0b;
      --accent-orange-dark: #d97706;
      --bg-light: #f8fafc;
    }

    /* Header */
    header {
      background: #ffffff;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .header-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
    }
    .logo {
      font-weight: 800;
      font-size: 20px;
      color: var(--primary-green);
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .header-contact {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .header-phone {
      font-weight: 700;
      color: var(--primary-green);
      font-size: 16px;
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%);
      color: #ffffff;
      padding: 60px 0 80px 0;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%);
      pointer-events: none;
    }
    .hero-badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(5px);
      padding: 6px 16px;
      border-radius: 30px;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 20px;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    .hero h1 {
      font-size: 38px;
      font-weight: 800;
      line-height: 1.25;
      margin-bottom: 20px;
      color: #ffffff;
    }
    .hero p {
      font-size: 18px;
      max-width: 800px;
      margin: 0 auto 35px auto;
      color: #e2e8f0;
    }
    .hero-buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 16px 32px;
      border-radius: 12px;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      border: none;
      transition: all 0.3s ease;
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }
    .btn-gold {
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: #ffffff;
    }
    .btn-gold:hover {
      background: linear-gradient(135deg, #fbbf24 0%, #b45309 100%);
      transform: translateY(-3px);
      box-shadow: 0 15px 25px rgba(217, 119, 6, 0.4);
    }
    .btn-outline {
      background: rgba(255,255,255,0.15);
      color: #ffffff;
      border: 2px solid rgba(255,255,255,0.6);
      backdrop-filter: blur(5px);
    }
    .btn-outline:hover {
      background: #ffffff;
      color: var(--primary-green);
      transform: translateY(-3px);
    }

    /* Promo Section */
    .promo-section {
      margin-top: -40px;
      margin-bottom: 60px;
      position: relative;
      z-index: 10;
    }
    .promo-box {
      background: #ffffff;
      border: 3px solid #f59e0b;
      border-radius: 20px;
      padding: 30px;
      text-align: center;
      box-shadow: 0 20px 30px -10px rgba(245, 158, 11, 0.25);
      position: relative;
    }
    .promo-badge {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: #d97706;
      color: #ffffff;
      padding: 4px 18px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .promo-text {
      font-size: 22px;
      font-weight: 700;
      color: #0f172a;
    }

    /* Advantages Section */
    .section-title {
      text-align: center;
      font-size: 30px;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 12px;
    }
    .section-subtitle {
      text-align: center;
      font-size: 16px;
      color: #64748b;
      margin-bottom: 40px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin-bottom: 60px;
    }
    .card {
      background: #ffffff;
      padding: 30px;
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 10px 20px rgba(0,0,0,0.03);
      transition: all 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 30px rgba(46, 125, 50, 0.12);
      border-color: #2e7d32;
    }
    .card-icon {
      font-size: 36px;
      margin-bottom: 15px;
    }
    .card-title {
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 10px;
    }
    .card-desc {
      font-size: 15px;
      color: #475569;
    }

    /* Form Section */
    .contact-section {
      background: #ffffff;
      border-radius: 24px;
      padding: 50px 40px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.06);
      margin-bottom: 60px;
      border: 1px solid #e2e8f0;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .form-label {
      display: block;
      font-weight: 600;
      font-size: 14px;
      color: #334155;
      margin-bottom: 8px;
    }
    .form-input {
      width: 100%;
      padding: 14px 18px;
      border: 2px solid #cbd5e1;
      border-radius: 12px;
      font-size: 16px;
      font-family: inherit;
      transition: border-color 0.2s;
    }
    .form-input:focus {
      outline: none;
      border-color: var(--primary-green);
    }
    .btn-green-full {
      width: 100%;
      background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
      color: #ffffff;
      padding: 18px;
      font-size: 18px;
      font-weight: 700;
      border-radius: 12px;
      border: none;
      cursor: pointer;
      box-shadow: 0 10px 20px rgba(46, 125, 50, 0.3);
      transition: all 0.3s;
    }
    .btn-green-full:hover {
      background: linear-gradient(135deg, #388e3c 0%, #144716 100%);
      transform: translateY(-2px);
    }

    /* Sticky Mobile Footer */
    .sticky-mobile-bar {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #ffffff;
      box-shadow: 0 -5px 25px rgba(0,0,0,0.15);
      padding: 12px 15px;
      z-index: 1000;
      gap: 12px;
    }
    .sticky-btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 14px 10px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 15px;
      text-align: center;
    }
    .sticky-call {
      background: #2e7d32;
      color: #ffffff;
    }
    .sticky-msg {
      background: #f59e0b;
      color: #ffffff;
    }

    /* Success Modal */
    .modal-backdrop {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(15, 23, 42, 0.7);
      backdrop-filter: blur(5px);
      z-index: 2000;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .modal-content {
      background: #ffffff;
      border-radius: 20px;
      padding: 40px 30px;
      max-width: 480px;
      width: 100%;
      text-align: center;
      box-shadow: 0 25px 50px rgba(0,0,0,0.25);
      animation: popIn 0.3s ease;
    }
    @keyframes popIn {
      from { transform: scale(0.8); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .modal-icon {
      width: 70px;
      height: 70px;
      background: #e8f5e9;
      color: #2e7d32;
      font-size: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px auto;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero h1 { font-size: 28px; }
      .hero p { font-size: 16px; }
      .sticky-mobile-bar { display: flex; }
      .contact-section { padding: 30px 20px; }
    }
  </style>
</head>
<body>

  <!-- Header -->
  <header>
    <div class="container header-inner">
      <div class="logo">
        <span style="font-size: 24px;">🇨🇳🇹🇲</span>
        <span>HYTAÝ HYZMATDAŞLYK</span>
      </div>
      <div class="header-contact">
        <a href="tel:+99361396970" class="header-phone">📞 Jaň Etmek</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-badge">🌟 Resmi Mümkinçilik & Ýokary Girdeji</div>
      <h1>Hytaý Kompaniýasynda Täze Iş Mümkinçilikleri!</h1>
      <p>Garaşsyz we üstünlikli biznesiňize şu gün başlaň! Erkin grafik, çäksiz girdeji we töwekgelçiliksiz gelejek.</p>
      <div class="hero-buttons">
        <a href="tel:+99361396970" class="btn btn-gold">📞 Jaň Etmek</a>
        <a href="#contact" class="btn btn-outline">✉️ Habar galdyrmak</a>
      </div>
    </div>
  </section>

  <!-- Promo Section -->
  <section class="container promo-section">
    <div class="promo-box">
      <div class="promo-badge">💥 ÜNS ÇEKIJI TEKLIP</div>
      <div class="promo-text">
        "Gündelik çykdaýjylaryňyzy 50%-den 100%-e çenli azaldyň we goşmaça pul gazanyň!"
      </div>
    </div>
  </section>

  <!-- Advantages Section -->
  <section class="container" style="margin-bottom: 60px;">
    <h2 class="section-title">Biznesiniň Artykmaçlyklary</h2>
    <p class="section-subtitle">Näme üçin müňlerçe hyzmatdaş bizi saýlaýar?</p>
    
    <div class="grid">
      <div class="card">
        <div class="card-icon">⏰</div>
        <div class="card-title">Erkin Iş Tertibi</div>
        <div class="card-desc">Wagtyňyzy özüňiz kesgitläň. Isleseňiz öýden, isleseňiz goşmaça iş hökmünde zähmet çekip bilersiňiz.</div>
      </div>
      <div class="card">
        <div class="card-icon">💎</div>
        <div class="card-title">Çäksiz Girdeji we 8 Dürli Bonus</div>
        <div class="card-desc">Satuw, toparlaýyn we liderlik bonuslary arkaly tapgyrly ýokary girdejilere eýe boluň.</div>
      </div>
      <div class="card">
        <div class="card-icon">🛡️</div>
        <div class="card-title">Töwekgelçiliksiz Biznes</div>
        <div class="card-desc">Uly maýa goýumsyz, maliýe töwekgelçiligi bolmazdan öz biznesiňizi aňsatlyk bilen guruň.</div>
      </div>
      <div class="card">
        <div class="card-icon">🎓</div>
        <div class="card-title">Mugt Okuw we Hemişelik Goldaw</div>
        <div class="card-desc">Biznes tälimçilerimiz tarapyndan mugt öwrediş sapaklary we 24/7 hünärmen goldawy.</div>
      </div>
      <div class="card">
        <div class="card-icon">👥</div>
        <div class="card-title">Hemmeler Üçin Elýeterli</div>
        <div class="card-desc">Ýörite bilim ýa-da iş tejribesi gerek däl. Diňe 18 ýaşdan uly bolmak ýeterlikdir!</div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="container" id="contact">
    <div class="contact-section">
      <h2 class="section-title" style="margin-bottom: 10px;">Habarlaşmak / Maglumat Almak</h2>
      <p class="section-subtitle" style="margin-bottom: 30px;">Formany dolduryň, biziň hünärmenimiz tiz arada siziň bilen habarlaşar.</p>

      <form id="leadForm">
        <div class="form-group">
          <label class="form-label" for="fullName">Adyňyz we Familiýaňyz *</label>
          <input type="text" id="fullName" class="form-input" placeholder="Meselem: Aman Amanow" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="phone">Telefon belgisiňiz *</label>
          <input type="tel" id="phone" class="form-input" value="+993 " required>
        </div>

        <div class="form-group">
          <label class="form-label" for="question">Goşmaça sorag ýa-da bellik (Islege bagly)</label>
          <textarea id="question" class="form-input" rows="3" placeholder="Soraglaryňyzy ýazyň..."></textarea>
        </div>

        <button type="submit" class="btn-green-full">🚀 Ugratmak / Maglumat Almak</button>
      </form>
    </div>
  </section>

  <!-- Mobile Sticky Bar -->
  <div class="sticky-mobile-bar">
    <a href="tel:+99361396970" class="sticky-btn sticky-call">📞 Jaň Etmek</a>
    <a href="#contact" class="sticky-btn sticky-msg">✉️ Habar Ýazmak</a>
  </div>

  <!-- Success Modal -->
  <div class="modal-backdrop" id="successModal">
    <div class="modal-content">
      <div class="modal-icon">✓</div>
      <h3 style="font-size: 24px; color: #0f172a; margin-bottom: 12px;">Ýüzlenmäňiz kabul edildi!</h3>
      <p style="color: #475569; font-size: 16px; margin-bottom: 25px;">Tiz arada biziň maslahatçymyz siz bilen habarlaşar we ähli soraglaryňyza jogap berer.</p>
      <button onclick="closeModal()" class="btn btn-gold" style="width: 100%;">Tammalash / Ýapmak</button>
    </div>
  </div>

  <!-- JavaScript -->
  <script>
    // Phone input auto-formatting for Turkmenistan (+993)
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('focus', function() {
      if(!phoneInput.value.startsWith('+993 ')) {
        phoneInput.value = '+993 ';
      }
    });

    phoneInput.addEventListener('input', function(e) {
      let val = phoneInput.value;
      if (!val.startsWith('+993 ')) {
        phoneInput.value = '+993 ' + val.replace(/[^0-9]/g, '');
      }
    });

    // Handle Form Submit
    document.getElementById('leadForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const fullName = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('phone').value.trim();
      
      if (!fullName || phone.length < 8) {
        alert('Haýyş, adyňyz we dogry telefon belgiňizi giriziň!');
        return;
      }

      // Open Success Modal
      document.getElementById('successModal').style.display = 'flex';
      
      // Reset form
      this.reset();
      phoneInput.value = '+993 ';
    });

    function closeModal() {
      document.getElementById('successModal').style.display = 'none';
    }
  </script>
</body>
</html>`;
}
