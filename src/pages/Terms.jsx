import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import './Privacy.css';

function Terms() {
  return (
    <div className="terms-page page-transition">
      <SEO
        title="Terms & Conditions"
        description="Read our terms and conditions for using Aangan Decor's website and services."
        keywords="terms and conditions, terms of service, legal, aangan decor"
        url="https://aangangroup.in/terms-conditions"
      />

      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Terms & Conditions', path: '/terms-conditions' }
        ]}
      />

      <section className="terms-content section-padding">
        <div className="container">
          <div className="content-wrapper">
            <p className="last-updated">Last Updated: January 2026</p>

            <div className="content-section">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing and using the Aangan Decor website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our website or services.
              </p>
            </div>

            <div className="content-section">
              <h2>Use of Website</h2>
              <h3>Permitted Use</h3>
              <p>You may use our website for:</p>
              <ul>
                <li>Browsing our product catalog and services</li>
                <li>Requesting quotes and information</li>
                <li>Contacting us for business inquiries</li>
                <li>Subscribing to our newsletter</li>
              </ul>

              <h3>Prohibited Use</h3>
              <p>You agree not to:</p>
              <ul>
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit any harmful code or malware</li>
                <li>Copy, reproduce, or distribute our content without permission</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Products and Services</h2>
              <h3>Product Information</h3>
              <p>
                We strive to provide accurate product descriptions, specifications, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, or error-free. We reserve the right to correct any errors and update information at any time.
              </p>

              <h3>Pricing</h3>
              <p>
                All prices are subject to change without notice. Quoted prices are valid for 30 days unless otherwise specified. Final pricing will be confirmed in your order confirmation.
              </p>

              <h3>Orders and Quotations</h3>
              <ul>
                <li>All orders are subject to acceptance and availability</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Quotations are valid for the period specified</li>
                <li>Custom orders may require advance payment</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Delivery and Installation</h2>
              <p>
                Delivery times are estimates and may vary based on product availability and location. We will make reasonable efforts to meet delivery schedules but are not liable for delays beyond our control.
              </p>
              <p>
                Installation services, when provided, will be performed by qualified professionals. Additional charges may apply for installation in difficult-to-access locations.
              </p>
            </div>

            <div className="content-section">
              <h2>Payment Terms</h2>
              <ul>
                <li>Payment terms will be specified in your order confirmation</li>
                <li>We accept various payment methods as indicated</li>
                <li>For bulk orders, advance payment may be required</li>
                <li>Late payments may incur additional charges</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>Warranty and Returns</h2>
              <h3>Product Warranty</h3>
              <p>
                Our products come with manufacturer warranties as specified. Warranty terms vary by product type and manufacturer. Please refer to specific product documentation for warranty details.
              </p>

              <h3>Returns and Exchanges</h3>
              <p>
                Returns and exchanges are subject to our return policy. Custom-made products may not be eligible for return. Please contact us within 7 days of delivery for any issues.
              </p>
            </div>

            <div className="content-section">
              <h2>Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of Aangan Decor or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our written permission.
              </p>
            </div>

            <div className="content-section">
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Aangan Decor shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
              </p>
            </div>

            <div className="content-section">
              <h2>Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Aangan Decor and its affiliates from any claims, damages, or expenses arising from your use of our website or violation of these terms.
              </p>
            </div>

            <div className="content-section">
              <h2>Governing Law</h2>
              <p>
                These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Morbi, Gujarat.
              </p>
            </div>

            <div className="content-section">
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of our website constitutes acceptance of the modified terms.
              </p>
            </div>

            <div className="content-section">
              <h2>Contact Information</h2>
              <p>For questions about these Terms and Conditions, please contact us:</p>
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

export default Terms;
