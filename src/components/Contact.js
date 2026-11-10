import React, { useEffect, useState } from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoCopyOutline, IoCheckmark } from 'react-icons/io5';
import { profile } from '../data';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch (err) {
      // Clipboard can be blocked; the address is still shown as plain text above.
      setCopied(false);
    }
  };

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(profile.emailSubject)}`;

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-card">
          <h2 className="section-title">Get in touch</h2>
          <p className="lead">
            I'm looking for internships and entry-level roles, and I'm happy to chat about projects or freelance
            work. The fastest way to reach me is email.
          </p>

          <p className="email-text">{profile.email}</p>

          <div className="cta-row">
            <a className="btn btn-primary" href={mailto}>
              <IoMail aria-hidden="true" /> Email me
            </a>
            <button type="button" className="btn btn-ghost" onClick={copyEmail}>
              {copied ? <IoCheckmark aria-hidden="true" /> : <IoCopyOutline aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>
          <span className="sr-only" role="status" aria-live="polite">
            {copied ? 'Email address copied' : ''}
          </span>

          <div className="socials">
            <a className="social" href={profile.linkedin} target="_blank" rel="noreferrer">
              <IoLogoLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a className="social" href={profile.github} target="_blank" rel="noreferrer">
              <IoLogoGithub aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
