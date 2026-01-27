import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import './Privacy.css';

function Privacy() {
  return (
    <div className="privacy-page page-transition">
      <SEO
        title="Privacy Policy"
        description="Read our privacy policy to understand how Aangan Decor collects, uses, and protects your personal information."
        keywords="privacy policy, data protection, privacy, aangan decor"
        url="https://aangangroup.in/privacy-policy"
      />

      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Privacy Policy', path: '/privacy-policy' }
        ]}
      />

      <section className="privacy-content section-padding">
        <div className="container">
          <div className="content-wrapper">
            <p className="last-updated">Last Updated: January 2026</p>

            <div className="content-section">
              <h2>Introduction</h2>
              <p>
                At Aangan Decor, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div className="content-section">
              <h2>Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Fill out contact forms or request quotes</li>
                <li>Subscribe to our newsletter</li>
                <li>Make inquiries about our products or services</li>
                <li>Communicate with us via email, phone, or WhatsApp</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name and contact details (email, phone number, address)</li>
                <li>Company name and business information</li>
                <li>Project requirements and preferences</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect certain information, including:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>How We Use Your Information</h2>
              <p>We use the collected information for various purposes:</p>
              <ul>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To process and fulfill your orders or service requests</li>
                <li>To send you newsletters and marketing communications (with your consent)</li>
                <li>To improve our website, products, and services</li>
                <li>To analyze website usage and optimize user experience</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="content-section">
              <h2>Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div className="content-section">
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications at any time</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </div>

            <div className="content-section">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last Updated" date.
              </p>
            </div>

            <div className="content-section">
              <h2>Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
              <ul className="contact-list">
                <li><strong>Email:</strong> aangandecor7@gmail.com</li>
                <li><strong>Phone:</strong> +91 70696 30777</li>
                <li><strong>Address:</strong> 3rd Floor, Sky Tower, Upper Sanket India, Nr. Umiya Circle, Morbi 363 641</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
