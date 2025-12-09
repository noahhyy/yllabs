<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Star-Lite</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

<style>
  :root{
    --bg: #f8fafc;
    --panel: #ffffff;
    --muted: #6b7280;
    --accent: #38bdf8;

    --radius: 10px;
    --max-width: 1100px;
  }

  html,body{
    height:100%;
    margin:0;
    padding:0;
    font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial;
    background: var(--bg);
    color:#0f172a;
  }

  .wrap { max-width: var(--max-width); margin: 0 auto; padding: 0 1.25rem; }

  /* Header */
  header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem 0;
    border-bottom:1px solid rgba(0,0,0,0.05);
    position:sticky;
    top:0;
    z-index:60;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(6px);
  }

  .brand { display:flex; align-items:center; gap:0.75rem; }
  .brand img {
    width:56px; height:56px; border-radius:12px;
    object-fit:contain;
    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.15));
  }

  nav{ display:flex; gap:1rem; }
  nav a{
    text-decoration:none;
    font-weight:600;
    color:var(--muted);
    padding:0.35rem 0.6rem;
    border-radius:8px;
    transition: color .2s, background .2s;
  }
  nav a:hover{ color:var(--accent); background: rgba(0,0,0,0.04); }

  /* Showcase bar */
  .showcase-bar{
    overflow:hidden;
    background: var(--panel);
    padding:0.6rem 0;
    border-bottom:1px solid rgba(0,0,0,0.05);
  }
  .showcase-track{
    display:flex;
    width:max-content;
    animation:scroll 24s linear infinite;
    gap:2rem;
    padding-left:1.25rem;
  }
  .showcase-item{
    color:var(--muted);
    font-weight:700;
    white-space:nowrap;
  }
  @keyframes scroll{
    0%{ transform: translateX(0); }
    100%{ transform: translateX(-50%); }
  }

  /* Hero */
  .hero{
    text-align:left;
    padding:4.5rem 0;
    display:flex;
    align-items:center;
    gap:2rem;
  }
  .hero h2{ font-size:2.8rem; margin-bottom:0.6rem; color:var(--accent); }
  .hero p{ margin-bottom:1.25rem; color:var(--muted); max-width:740px; }

  /* Buttons */
  .btn{
    display:inline-block;
    padding:0.9rem 1.6rem;
    border-radius:10px;
    font-weight:800;
    text-decoration:none;
    cursor:pointer;
  }
  .btn-primary{ background:var(--accent); color:#000; }
  .btn-secondary{
    background:transparent;
    border:1px solid rgba(0,0,0,0.1);
    color:var(--muted);
  }

  .section{ padding:3.5rem 0; }
  .section h2{
    text-align:center;
    font-size:2rem;
    margin-bottom:1.25rem;
    color:var(--accent);
  }

  .features,
  .commands,
  .plans{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
    gap:1.25rem;
  }

  .card,
  .group,
  .plan{
    background:var(--panel);
    padding:1.25rem;
    border-radius:12px;
    border:1px solid rgba(0,0,0,0.05);
    box-shadow:0 6px 20px rgba(0,0,0,0.08);
  }

  footer{
    padding:2rem 0;
    text-align:center;
    color:var(--muted);
    border-top:1px solid rgba(0,0,0,0.05);
  }

  @media(max-width:900px){
    .hero{ flex-direction:column; text-align:center; }
    nav{ display:none; }
  }
</style>
</head>

<body>
<div id="site">

  <div class="wrap">
    <header>
      <div class="brand">
        <img id="logoImg" src="starlite.png" alt="Star-Lite Logo">
        <h1><span style="color:var(--accent);font-weight:800;">Star-Lite</span></h1>
      </div>

      <nav>
        <a href="#features">features</a>
        <a href="#showcase">showcase</a>
        <a href="#plans">plans</a>
        <a href="#contact">contact</a>
      </nav>
    </header>
  </div>

  <!-- Showcase -->
  <div class="showcase-bar">
    <div id="showcase-track" class="showcase-track"></div>
  </div>

  <div class="wrap">
    <section class="hero">
      <div>
        <h2 id="hero-heading">keep your server active</h2>
        <p>Star-Lite provides modern tools for moderation, support, analytics, and community engagement. Clean, fast, and built to scale.</p>
        <div class="buttons">
          <a href="#" class="btn btn-primary">invite</a>
          <a href="#showcase" class="btn btn-secondary">see commands</a>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="section">
      <h2>features</h2>
      <div class="features">
        <div class="card"><h3>🎟 tickets</h3><p>streamlined support with fast replies + clean logging.</p></div>
        <div class="card"><h3>⚖ moderation</h3><p>simple + fair tools to keep your server safe.</p></div>
        <div class="card"><h3>📊 analytics</h3><p>track activity, growth, and trends with ease.</p></div>
        <div class="card"><h3>✨ star feed</h3><p>a social feed that keeps your members active.</p></div>
      </div>
    </section>

    <!-- Commands -->
    <section id="showcase" class="section">
      <h2>command showcase</h2>
      <div class="commands">
        <div class="group">
          <h3>🚀 session tools</h3>
          <ul>
            <li>/startsession</li>
            <li>/endsession</li>
            <li>/sessioninfo</li>
            <li>/setsessionrole</li>
          </ul>
        </div>

        <div class="group">
          <h3>🛡 raid protection</h3>
          <ul>
            <li>/lockchannel</li>
            <li>/clearspam</li>
            <li>/antiraid on</li>
            <li>/antiraid off</li>
          </ul>
        </div>

        <div class="group">
          <h3>⚙ moderation</h3>
          <ul>
            <li>/ban</li>
            <li>/kick</li>
            <li>/mute</li>
            <li>/warn</li>
            <li>/slowmode</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="plans" class="section">
      <h2>plans</h2>
      <div class="plans">
        <div class="plan">
          <h3>free</h3>
          <p>essential features for any community.</p>
        </div>
        <div class="plan">
          <h3>premium (soon)</h3>
          <p>advanced tools for growing servers.</p>
        </div>
        <div class="plan">
          <h3>beta</h3>
          <p>early access to experimental modules.</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section" style="text-align:center;">
      <h2 style="color:var(--accent)">ready to upgrade your server?</h2>
      <a class="btn btn-primary" href="#">get Star-Lite now</a>
    </section>

    <!-- Footer -->
    <footer id="contact">
      <p>© <span id="year">2025</span> Star-Lite. all rights reserved.</p>
    </footer>
  </div>

</div>

<script>
  // Showcase scrolling content
  const servers = [
    "orbit lounge","nova system","starlite core",
    "cosmic hub","galaxy rp","nebula sector"
  ];
  const news = [
    "Star-Lite v2 released — faster core",
    "enhanced anti-raid system live",
    "analytics module upgraded",
    "star feed customization added",
    "uptime: 99.98% across clusters"
  ];

  const track = document.getElementById('showcase-track');

  function populateTrack(items){
    track.innerHTML = "";
    const doubled = [...items, ...items];
    doubled.forEach(text=>{
      const d = document.createElement('div');
      d.className = 'showcase-item';
      d.textContent = text;
      track.appendChild(d);
    });
    track.style.animation = 'none';
    void track.offsetWidth;
    track.style.animation = '';
  }

  let mode = "servers";
  populateTrack(servers);

  setInterval(()=>{
    mode = mode === "servers" ? "news" : "servers";
    populateTrack(mode === "servers" ? servers : news);
  }, 12000);

  // Hero text randomizer
  const heroLines = [
    "keep your server active",
    "modern tools for modern communities",
    "clean moderation, real speed",
    "reliable tools for real servers",
    "simple, fast, powerful"
  ];
  document.getElementById('hero-heading').textContent =
    heroLines[Math.floor(Math.random()*heroLines.length)];

  // Year update
  document.getElementById('year').textContent = new Date().getFullYear();
</script>

</body></html>
