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
import HorizontalPortfolio from "../../components/features/HorizontalPortfolio/HorizontalPortfolio";
import { optimizeImageUrl } from "../../utils/imageOptimizer";
import CinematicInterior from "../../components/features/CinematicInterior/CinematicInterior";
import LazyImage from "../../components/common/LazyImage/LazyImage";
import "./Home.css";

const categories = [
  {
    title: "Interior Items",
    description:
      "Premium plywood, laminates, acrylic, veneer, PU wall panels and materials for stunning interiors",
    image: optimizeImageUrl(
      "https://images.unsplash.com/photo-1615873968403-89e068629265",
      { width: 800 }
    ),
    link: "/interior",
    tag: "20+ Products"
  },
  {
    title: "Decorative Items",
    description:
      "Elegant mandala art, designer mirrors, clocks, artifacts, curtains and unique handcrafted pieces",
    image: optimizeImageUrl(
      "https://images.unsplash.com/photo-1513694203232-719a280e022f",
      { width: 800 }
    ),
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

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "250+", label: "Projects Completed" },
  { value: "200+", label: "Premium Products" },
  { value: "97%", label: "Client Satisfaction" }
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
                  className="category-card shine-sweep-hover card-tilt"
                  aria-label={`Explore ${cat.title}`}
                >
                  <div className="category-image-wrap">
                    <LazyImage src={cat.image} alt={cat.title} width={800} />
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

      {/* ── HORIZONTAL PORTFOLIO ──────────────── */}
      <HorizontalPortfolio />

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
                <div className="feature-card magnetic-pull">
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
                  bespoke decor guidance and end-to-end turnkey execution.
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
                    href="http://wa.me/917069621777?text=Hi!%20I%27m%20interested%20in%20Aangan%20Decor%20products." 
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
      {/* <TestimonialsCarousel /> */}
    </div>
  );
}

export default Home;
