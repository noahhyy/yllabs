export default function Home() {
  return (
    <div className="wrap">
      <header>
        <div className="brand">
          <img src="/logo.png" />
          <h1>Botara</h1>
        </div>
        <nav>
          <a href="#features">Botara Features</a>
          <a href="#terminal">Botara Commands</a>
          <a href="https://discord.gg/YBs9cE2cas" target="_blank">
            Botara Support
          </a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <h2>Botara - Where Moderation Becomes Reality</h2>
          <p>
            Botara protects your Discord with fast moderation tools,
            automated systems, and clean command design built for real servers.
          </p>
          <div className="buttons">
            <a
              className="btn primary"
              href="https://discord.com/oauth2/authorize?client_id=1447087964499873904&permissions=8&scope=bot"
            >
              Invite Bot
            </a>
            <a
              className="btn secondary"
              href="https://discord.gg/YBs9cE2cas"
              target="_blank"
            >
              Join Support
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <h2>Features</h2>
        <div className="grid">
          <div className="card">
            <h3>Auto Moderation</h3>
            <p>Detect spam, scams and abuse instantly.</p>
          </div>
          <div className="card">
            <h3>Powerful Commands</h3>
            <p>Ban, kick, timeout and manage users.</p>
          </div>
          <div className="card">
            <h3>Reliable Uptime</h3>
            <p>Always online and protecting.</p>
          </div>
        </div>
      </section>

      <section id="terminal" className="section">
        <h2>Live Command Preview</h2>
        <div className="terminal">
          <div className="terminalbar">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="title">Botara Terminal</span>
          </div>
          <div className="terminalbody">
            <div className="line">
              <span className="prompt">$</span>
              <span className="cmd">/serverinfo</span>
            </div>
            <div className="output">Data retrieved!</div>
            <div className="line">
              <span className="prompt">$</span>
              <span className="cmd">/userinfo @member</span>
            </div>
            <div className="output">User data retrieved successfully</div>
            <div className="line">
              <span className="prompt">$</span>
              <span className="cmd typing"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <a
          className="btn primary"
          href="https://discord.com/oauth2/authorize?client_id=1447087964499873904&permissions=8&scope=bot"
        >
          Add Botara
        </a>
      </section>

      <footer>
        <p>© 2026 Botara All rights reserved</p>
      </footer>
    </div>
  );
}
