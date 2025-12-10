<!DOCTYPE html>
<!-- 
  * Star-Lite Bot - Redesigned 2025
  * Modern, Dynamic Discord Bot Interface
-->
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Primary Meta Tags -->
  <title>Star-Lite Bot - Next-Gen Discord Security</title>
  <meta name="title" content="Star-Lite Bot - Next-Gen Discord Security" />
  <meta name="description"
        content="Experience the future of Discord moderation with AI-powered protection, real-time analytics, and seamless automation." />

  <!-- Open Graph / Facebook / Discord -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://starlitebot.com/" />
  <meta property="og:title" content="Star-Lite Bot - Next-Gen Discord Security" />
  <meta property="og:description"
        content="Transform your Discord server with ERLC moderation, intelligent automation, and 24/7 protection." />
  <meta property="og:image" content="https://starlitebot.com/assets/images/starlite-preview.png" />
  <meta property="og:site_name" content="Star-Lite Bot" />
  <meta property="og:color" content="#22d3ee" />

  <!-- Theme Color -->
  <meta name="theme-color" content="#22d3ee" />

  <!-- Favicon -->
  <link rel="shortcut icon" href="./assets/images/starlite.png" type="image/x-icon" />

  <!-- CSS Files -->
  <link rel="stylesheet" href="./assets/css/redesigned-style.css" />

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap"
        rel="stylesheet" />

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

  <!-- Particles.js for Background -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"></script>

  <style>
    /* Coming Soon Badge Styles */
    .coming-soon-badge {
      position: absolute;
      top: 16px;
      right: 16px;
      padding: 6px 12px;
      background: linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%);
      color: white;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-radius: 20px;
      box-shadow: 0 4px 12px rgba(34, 211, 238, 0.3);
      animation: pulse 2s ease-in-out infinite;
      z-index: 10;
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 4px 12px rgba(34, 211, 238, 0.3);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 4px 16px rgba(34, 211, 238, 0.5);
      }
    }

    .feature-highlight {
      position: relative;
    }

    .feature-highlight.coming-soon {
      opacity: 0.95;
    }

    .feature-highlight.coming-soon::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(34, 211, 238, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%);
      border-radius: 16px;
      pointer-events: none;
    }

    .gradient-text {
      background: linear-gradient(90deg, #22d3ee, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  </style>
</head>

<body>
  <!-- Animated Background -->
  <div id="particles-js"></div>

  <!-- Navigation -->
  <nav class="navbar">
    <div class="nav-container">
      <a href="index.html" class="logo">
        <span class="logo-text">STAR-LITE</span>
      </a>

      <div class="nav-menu" id="navMenu">
        <a href="our-impact.html" class="nav-link">Impact</a>
        <a href="https://discord.gg/EvXc2kX5RC" class="nav-link" target="_blank">Support</a>

        <div class="nav-actions">
          <a href="https://discord.com/oauth2/authorize?client_id=1430018266088083496&permissions=8&integration_type=0&scope=bot"
             class="btn btn-primary" target="_blank">
            <i class="fab fa-discord"></i>
            <span>Add to Server</span>
          </a>
        </div>
      </div>

      <button class="mobile-toggle" id="mobileToggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-badge">
          <i class="fas fa-sparkles"></i>
          <span>Trusted by 5,000+ Users</span>
        </div>

        <h1 class="hero-title">
          Discord Moderation,
          <span class="gradient-text">Reimagined</span>
        </h1>

        <p class="hero-description">
          Protect your community with cutting-edge ERLC moderation, real-time threat detection,
          and powerful automation tools—all in one elegant solution.
        </p>

        <div class="hero-stats">
          <div class="stat-pill">
            <i class="fas fa-bolt"></i>
            <span>< 30ms Response</span>
          </div>
          <div class="stat-pill">
            <i class="fas fa-shield-check"></i>
            <span>99.99% Uptime</span>
          </div>
          <div class="stat-pill">
            <i class="fas fa-infinity"></i>
            <span>Forever Free</span>
          </div>
        </div>

        <div class="hero-actions">
          <a href="https://discord.com/oauth2/authorize?client_id=1430018266088083496&permissions=8&integration_type=0&scope=bot"
             class="btn btn-primary btn-large" target="_blank">
            <i class="fab fa-discord"></i>
            <span>Get Started Free</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="floating-card card-1">
          <i class="fas fa-user-shield"></i>
          <span>ERLC Protection</span>
        </div>
        <div class="floating-card card-2">
          <i class="fas fa-brain"></i>
          <span>AI-Powered</span>
        </div>
        <div class="floating-card card-3">
          <i class="fas fa-chart-line"></i>
          <span>Real-Time Analytics</span>
        </div>
        <div class="hero-mockup">
          <div class="mockup-glow"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features" id="features">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">FEATURES</span>
        <h2 class="section-title">Everything You Need, <span class="gradient-text">Nothing You Don't</span></h2>
        <p class="section-subtitle">Powerful moderation tools designed for modern Discord communities</p>
      </div>

      <div class="features-grid">
        <div class="feature-card feature-highlight coming-soon">
          <span class="coming-soon-badge">
            <i class="fas fa-clock"></i> Coming Soon
          </span>
          <div class="feature-icon-large">
            <i class="fas fa-robot"></i>
          </div>
          <h3>ERLC Moderation</h3>
          <p>Intelligent threat detection and automatic response to keep your server safe 24/7</p>
          <ul class="feature-list">
            <li><i class="fas fa-check"></i> Smart spam detection</li>
            <li><i class="fas fa-check"></i> Toxic language filtering</li>
            <li><i class="fas fa-check"></i> Auto-escalation system</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-bolt"></i>
          </div>
          <h3>Lightning Fast</h3>
          <p>Sub-30ms response times ensure instant moderation actions when seconds matter</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3>Advanced Analytics</h3>
          <p>Real-time dashboards and insights to understand your community better</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-sliders"></i>
          </div>
          <h3>Fully Customizable</h3>
          <p>Configure every aspect to match your server's unique needs and style</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-shield-halved"></i>
          </div>
          <h3>Enterprise Security</h3>
          <p>Bank-grade encryption and security measures protect your data</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-headset"></i>
          </div>
          <h3>24/7 Support</h3>
          <p>Expert support team ready to help anytime with <10min response time</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-text">STAR-LITE</span>
          </div>
          <p>Next-generation Discord moderation for safer communities.</p>
          <div class="social-links">
            <a href="https://discord.gg/rwQ6T4dbCH" target="_blank" aria-label="Discord"><i class="fab fa-discord"></i></a>
            <a href="https://x.com/StarliteBot" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Star-Lite Bot. All rights reserved.</p>
        <p>Made with <i class="fas fa-heart"></i> for Discord communities</p>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="./assets/js/redesigned-script.js"></script>
</body>
</html>
