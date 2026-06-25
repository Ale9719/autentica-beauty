'use client';
import { useState } from 'react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background-color: #EFEDEC;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Jost', sans-serif;
          overflow: hidden;
        }

        .page {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 1.5rem;
          position: relative;
          background-color: #EFEDEC;
        }

        /* Decorative wave bottom */
        .wave {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          pointer-events: none;
          opacity: 0.5;
        }

        /* Thin gold lines decoration */
        .deco-line {
          position: fixed;
          background-color: #C47A4A;
          opacity: 0.15;
        }
        .deco-line-h {
          height: 1px;
          width: 40%;
          top: 15%;
          left: 30%;
        }
        .deco-line-v {
          width: 1px;
          height: 30%;
          top: 35%;
          right: 8%;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 560px;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        /* Logo */
        .logo-wrap {
          margin-bottom: 3rem;
        }
        .logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 300;
          letter-spacing: 0.35em;
          color: #323232;
          text-transform: uppercase;
        }
        .logo-line {
          width: 40px;
          height: 1px;
          background: #C47A4A;
          margin: 0.75rem auto 0;
          opacity: 0.6;
        }

        /* Eyebrow */
        .eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          font-weight: 300;
          letter-spacing: 0.4em;
          color: #C47A4A;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        /* Headline */
        .headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 7vw, 4.5rem);
          font-weight: 300;
          line-height: 1.1;
          color: #323232;
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }
        .headline em {
          font-style: italic;
          color: #C47A4A;
        }

        /* Subline */
        .subline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 300;
          font-style: italic;
          color: #323232;
          opacity: 0.55;
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        /* Divider */
        .divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          margin-bottom: 3rem;
        }
        .divider-line {
          flex: 1;
          height: 1px;
          background: #C47A4A;
          opacity: 0.25;
        }
        .divider-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #C47A4A;
          opacity: 0.5;
        }

        /* Body text */
        .body-text {
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          color: #323232;
          opacity: 0.6;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          letter-spacing: 0.02em;
        }

        /* Email form */
        .form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
        }
        .form-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #323232;
          opacity: 0.5;
          margin-bottom: 0.25rem;
        }
        .input-row {
          display: flex;
          width: 100%;
          max-width: 380px;
          border: 1px solid rgba(196, 122, 74, 0.3);
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(4px);
        }
        .input-row input {
          flex: 1;
          padding: 0.85rem 1.25rem;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem;
          font-weight: 300;
          color: #323232;
          letter-spacing: 0.05em;
        }
        .input-row input::placeholder {
          color: #323232;
          opacity: 0.35;
        }
        .input-row button {
          padding: 0.85rem 1.5rem;
          background: #C47A4A;
          border: none;
          cursor: pointer;
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          font-weight: 400;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #EFEDEC;
          transition: background 0.3s ease;
          white-space: nowrap;
        }
        .input-row button:hover {
          background: #B8693B;
        }

        /* Success state */
        .success {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-style: italic;
          color: #C47A4A;
          letter-spacing: 0.05em;
        }

        /* Footer note */
        .footer-note {
          margin-top: 4rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #323232;
          opacity: 0.3;
        }

        /* Social */
        .social {
          margin-top: 1.5rem;
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .social a {
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #323232;
          opacity: 0.4;
          text-decoration: none;
          transition: opacity 0.3s;
        }
        .social a:hover { opacity: 0.8; }

        @media (max-width: 480px) {
          .input-row { flex-direction: column; }
          .input-row button { padding: 0.75rem; }
        }
      `}</style>

      <div className="page">
        {/* Decorative elements */}
        <div className="deco-line deco-line-h" />
        <div className="deco-line deco-line-v" />

        <div className="content">
          {/* Logo */}
          <div className="logo-wrap">
            <p className="logo-text">Autentica Beauty</p>
            <div className="logo-line" />
          </div>

          {/* Eyebrow */}
          <p className="eyebrow">Borore, Sardegna · Apertura imminente</p>

          {/* Headline */}
          <h1 className="headline">
            La tua <em>bellezza</em><br />
            autentica<br />
            ti aspetta.
          </h1>

          <p className="subline">
            Stiamo preparando qualcosa di speciale per te.
          </p>

          <div className="divider">
            <div className="divider-line" />
            <div className="divider-dot" />
            <div className="divider-line" />
          </div>

          <p className="body-text">
            Il nostro centro estetico aprirà presto le sue porte.<br />
            Lascia la tua email per essere la prima a saperlo.
          </p>

          {/* Email form */}
          {!submitted ? (
            <form className="form" onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="email">Avvisami all'apertura</label>
              <div className="input-row">
                <input
                  id="email"
                  type="email"
                  placeholder="la tua email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Avvisami</button>
              </div>
            </form>
          ) : (
            <p className="success">Grazie — ti contatteremo presto. ✦</p>
          )}

          {/* Footer */}
          <p className="footer-note">© 2026 Autentica Beauty · Tutti i diritti riservati</p>

          <div className="social">
            <a href="https://www.instagram.com/autentica.beauty/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        {/* Wave decoration */}
        <svg className="wave" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" fill="#C47A4A" fillOpacity="0.06"/>
          <path d="M0,80 C360,40 720,110 1080,60 C1260,35 1380,90 1440,80 L1440,120 L0,120 Z" fill="#C47A4A" fillOpacity="0.04"/>
        </svg>
      </div>
    </>
  );
}