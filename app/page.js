"use client"; // Make this a client component so styling works safely

export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <img src="/logo.png" className="logo" />
        <h1>Botara</h1>

        <h2>Service Paused</h2>

        <p>
          After careful consideration, Botara has been discontinued for now.
        </p>

        <p>
          This decision was not easy, but I need to focus on my mental health
          and take a step back from development.
        </p>

        <p>
          Thank you to everyone who supported Botara and believed in the
          project. Your support truly meant everything.
        </p>

        <p>
          This is not necessarily permanent. It is simply a pause until I am
          ready to return in a better place.
        </p>

        <footer>
          <p>© 2026 Botara. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
