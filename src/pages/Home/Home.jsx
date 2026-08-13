import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaStar,
  FaCheckCircle,
  FaLeaf,
  FaTruck,
  FaMedal,
  FaHome,
  FaWhatsapp,
  FaPhone
} from "react-icons/fa";
import ScrollReveal from "../../components/common/ScrollReveal/ScrollReveal";
import GradientButton from "../../components/common/GradientButton/GradientButton";
import TestimonialsCarousel from "../../components/features/TestimonialsCarousel/TestimonialsCarousel";
import Newsletter from "../../components/features/Newsletter/Newsletter";
import CinematicInterior from "../../components/features/CinematicInterior/CinematicInterior";
import "./Home.css";

const categories = [
  {
    title: "Interior Items",
    description:
      "Premium plywood, laminates, acrylic, veneer, PU wall panels, and materials for stunning interiors",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=900&q=85",
    link: "/interior",
    tag: "20+ Products"
  },
  {
    title: "Decorative Items",
    description:
      "Elegant mandala art, designer mirrors, clocks, artifacts, curtains, and unique handcrafted pieces",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=85",
    link: "/decorative",
    tag: "15+ Products"
  }
];

const features = [
  {
    icon: <FaMedal />,
    title: "Premium Quality",
    text: "Handpicked ISI-grade materials sourced from top manufacturers"
  },
  {
    icon: <FaHome />,
    title: "Expert Design",
    text: "Professional interior guidance by seasoned design consultants"
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    text: "On-time project delivery with careful logistics handling"
  },
  {
    icon: <FaLeaf />,
    title: "Eco-Conscious",
    text: "Sustainably sourced materials with minimal environmental impact"
  }
];

const galleryFrames = [
  {
    image:
      "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786299843/images_59_aojqm9.jpg",
    label: "Living Room",
    tag: "Interior Design"
  },
  {
    image:
      "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296639/images_32_gwgu3v.jpg",
    label: "Luxury Sofa",
    tag: "Furniture"
  },
  {
    image:
      "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786287129/il_794xN.2688857519_ahre_anrxzz.jpg",
    label: "Mandala Art",
    tag: "Decorative"
  },
  {
    image:
      "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296187/images_21_w6hfio.jpg",
    label: "Designer Lights",
    tag: "Lighting"
  },
  {
    image:
      "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786286573/DG-08_nqur4o.jpg",
    label: "Premium Laminates",
    tag: "Interior"
  },
  {
    image:
      "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296870/images_35_l2cawn.jpg",
    label: "Dining Table",
    tag: "Furniture"
  }
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5000+", label: "Projects Completed" },
  { value: "200+", label: "Premium Products" },
  { value: "98%", label: "Client Satisfaction" }
];

function Home() {
  return (
    <div className="home">
      {/* ── CINEMATIC HERO ─────────────────────────────── */}
      <CinematicInterior />

      {/* ── CATEGORIES ───────────────────────── */}
      <section
        className="categories-section section"
        aria-label="Our Collections"
      >
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header">
              <span className="section-eyebrow">What We Offer</span>
              <h2>Our Collections</h2>
              <p>
                Explore our two main categories of premium decor &amp; interior
                products
              </p>
            </div>
          </ScrollReveal>

          <div className="categories-grid">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.title} direction="up" delay={i * 0.15}>
                <Link
                  to={cat.link}
                  className="category-card"
                  aria-label={`Explore ${cat.title}`}
                >
                  <div className="category-image-wrap">
                    <img src={cat.image} alt={cat.title} loading="lazy" />
                    <div className="category-overlay" />
                    <span className="category-tag">{cat.tag}</span>
                  </div>
                  <div className="category-body">
                    <h3>{cat.title}</h3>
                    <p>{cat.description}</p>
                    <span className="category-cta">
                      Explore Collection
                      <FaArrowRight aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────── */}
      <section className="gallery-section section" aria-label="Portfolio">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header">
              <span className="section-eyebrow">Portfolio</span>
              <h2>From Our Portfolio</h2>
              <p>
                A glimpse into the spaces we have transformed with artisanal
                craftsmanship
              </p>
            </div>
          </ScrollReveal>

          <div className="gallery-grid">
            {galleryFrames.map((frame, i) => (
              <ScrollReveal key={frame.label} direction="up" delay={i * 0.07}>
                <div className="gallery-item">
                  <div className="gallery-frame">
                    <img src={frame.image} alt={frame.label} loading="lazy" />
                    <div className="gallery-frame-overlay">
                      <span className="gallery-tag">{frame.tag}</span>
                      <h4 className="gallery-label">{frame.label}</h4>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up">
            <div className="gallery-actions">
              <Link to="/interior" className="btn btn-primary">
                View Interior Range
              </Link>
              <Link to="/decorative" className="btn btn-outline">
                Browse Decorative Items
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────── */}
      <section
        className="features-section section-sm"
        aria-label="Why Choose Us"
      >
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header">
              <span className="section-eyebrow">Why Choose Us</span>
              <h2>The Aangan Difference</h2>
            </div>
          </ScrollReveal>

          <div className="features-grid">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} direction="up" delay={i * 0.1}>
                <div className="feature-card">
                  <div className="feature-icon-wrap">
                    <span className="feature-icon" aria-hidden="true">
                      {feature.icon}
                    </span>
                  </div>
                  <div className="feature-body">
                    <h4>{feature.title}</h4>
                    <p>{feature.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACT US ─────────────────── */}
      <section className="cta-section section" aria-label="Contact Us & Get Started">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="cta-card">
              <div className="cta-content">
                <span className="section-eyebrow cta-eyebrow">Start Your Transformation</span>
                <h2>Ready to Elevate Your Living Space?</h2>
                <p>
                  Consult with our senior interior specialists for personalized material selections, 
                  bespoke decor guidance, and end-to-end turnkey execution.
                </p>

                <div className="cta-perks">
                  <div className="cta-perk">
                    <span className="cta-perk-icon"><FaCheckCircle /></span>
                    <span>Free Design Consultation</span>
                  </div>
                  <div className="cta-perk">
                    <span className="cta-perk-icon"><FaCheckCircle /></span>
                    <span>100% ISI-Grade Sourcing</span>
                  </div>
                  <div className="cta-perk">
                    <span className="cta-perk-icon"><FaCheckCircle /></span>
                    <span>Turnkey Project Execution</span>
                  </div>
                </div>

                <div className="cta-actions">
                  <Link to="/contact">
                    <GradientButton variant="gold" size="large">
                      Book Free Consultation
                      <FaArrowRight aria-hidden="true" style={{ marginLeft: '0.4rem' }} />
                    </GradientButton>
                  </Link>
                  <a href="tel:+917069621777" className="cta-phone-link">
                    <GradientButton variant="outline-dark" size="large">
                      <FaPhone aria-hidden="true" />
                      Call +91 70696 21777
                    </GradientButton>
                  </a>
                  <a 
                    href="http://wa.me/917069621777" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cta-whatsapp-btn"
                    aria-label="Chat on WhatsApp"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────── */}
      <TestimonialsCarousel />

      {/* ── NEWSLETTER ───────────────────────── */}
      <Newsletter />
    </div>
  );
}

export default Home;
