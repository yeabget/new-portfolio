import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const htmlMessage = `
<b>📬 New Portfolio Message</b>
───────────────────
👤 <b>Name:</b> ${formData.fullName}
📧 <b>Email:</b> ${formData.email}
📝 <b>Subject:</b> ${formData.subject}

💬 <b>Message:</b>
"${formData.message}"
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: htmlMessage,
          parse_mode: 'HTML' 
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Telegram API Error Response:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network/Fetch Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-title-container">
        <h1 className="contact-title">Get In <span>Touch</span></h1>
        <div className="title-underline"></div>
      </div>

      <div className="contact-container">

        <div className="contact-info-panel">
          <h2>Let's build something amazing!</h2>
          <p className="contact-description">
            Whether you have a question, a project idea, or just want to say hi, 
            my inbox is always open. I'm particularly interested in collaborations 
            involving React, UI design, and modern frontend technologies.
          </p>

          <div className="info-cards-list">
            <div className="info-card">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="card-text">
                <span className="card-label">Email</span>
                <span className="card-value">yabget19@gmail.com</span>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div className="card-text">
                <span className="card-label">Social Presence</span>
                <div className="social-links">
                  <a href="https://github.com/yeabget" target="_blank" rel="noreferrer">GitHub</a>
                  <a href="https://www.linkedin.com/in/yeabsira-getachew-962001329/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
            
              <div className="card-text">
                <span className="card-label">Location</span>
                <span className="card-value">Addis Ababa, Ethiopia</span>
              </div>

            </div>
            <div>
              <div className="info-card">
                
                <div className="icon-wrapper">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.58 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.15a2 2 0 0 1 2.11-.45c.8.26 1.64.46 2.5.58A2 2 0 0 1 22 16.92z"></path>
  </svg>
</div>
                <div className='phone'><span className="card-label">Phone Number</span>
                <span className="card-value">+251961983411</span>
                </div>
              </div>
              </div>  
          </div>
        </div>

        <div className="contact-form-panel">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I help you?"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              {!isSubmitting && (
                <svg className="send-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              )}
            </button>

            {submitStatus === 'success' && (
              <p className="form-status-msg status-success">Message sent successfully to Telegram!</p>
            )}
            {submitStatus === 'error' && (
              <p className="form-status-msg status-error">Failed to dispatch message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;