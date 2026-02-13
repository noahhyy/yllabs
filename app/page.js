export default function Home() {
  return (
    <>
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

      <style jsx>{`
        .container {
          background: #000;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          text-align: center;
        }

        .content {
          max-width: 600px;
          padding: 40px 20px;
        }

        .logo {
          width: 80px;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 32px;
          margin-bottom: 10px;
        }

        h2 {
          font-size: 20px;
          font-weight: normal;
          margin-bottom: 30px;
          opacity: 0.8;
        }

        p {
          margin-bottom: 20px;
          line-height: 1.6;
          opacity: 0.9;
        }

        footer {
          margin-top: 40px;
          font-size: 14px;
          opacity: 0.6;
        }
      `}</style>
    </>
  );
}
