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
      {/* ── HERO ─────────────────────────────── */}
      <section className="hero-section" aria-label="Hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=85"
            alt=""
            aria-hidden="true"
            loading="eager"
          />
          <div className="hero-overlay" />
          <div className="hero-shimmer" aria-hidden="true" />
        </div>

        <div className="container hero-body">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <FaStar aria-hidden="true" />
              <span>India's Premium Decor Solutions</span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Transform Your Space
              <br />
              <em>With Elegant Design</em>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              "At Aangan, we don't just design interiors — we craft moods, and
              build timeless spaces"
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <Link to="/interior">
                <GradientButton variant="gold" size="large">
                  Explore Collections
                  <FaArrowRight aria-hidden="true" />
                </GradientButton>
              </Link>
              <a
                href="http://wa.me/917069621777"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GradientButton variant="secondary" size="large">
                  <FaWhatsapp aria-hidden="true" />
                  WhatsApp Us
                </GradientButton>
              </a>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="scroll-indicator-line" />
          <span>Scroll</span>
        </motion.div>
      </section>

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

      {/* ── CTA ──────────────────────────────── */}
      <section className="cta-section" aria-label="Call to Action">
        <div className="cta-bg">
          <img
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=1600&q=80"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div className="cta-overlay" />
        </div>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="cta-box">
              <span
                className="section-eyebrow"
                style={{
                  borderColor: "rgba(201,169,97,0.5)",
                  color: "var(--color-secondary-light)"
                }}
              >
                Start Your Project
              </span>
              <h2>Ready to Transform Your Space?</h2>
              <p>
                Get in touch with our design experts for personalized solutions
                tailored to your vision
              </p>
              <div className="cta-actions">
                <Link to="/contact">
                  <GradientButton variant="gold" size="large">
                    Contact Us Today
                  </GradientButton>
                </Link>
                <a href="tel:+917069621777">
                  <GradientButton variant="outline-light" size="large">
                    <FaPhone aria-hidden="true" />
                    Call Now
                  </GradientButton>
                </a>
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
