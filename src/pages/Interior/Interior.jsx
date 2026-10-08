import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaWhatsapp, FaQuoteRight, FaDownload } from "react-icons/fa";
import PageHero from "../../components/common/PageHero/PageHero";
import ScrollReveal from "../../components/common/ScrollReveal/ScrollReveal";
import QuoteModal from "../../components/features/QuoteModal/QuoteModal";
import LazyImage from "../../components/common/LazyImage/LazyImage";
import { optimizeImageUrl } from "../../utils/imageOptimizer";
import "./Interior.css";

function Interior() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const openQuoteModal = (productTitle) => {
    setSelectedProduct(productTitle);
    setIsQuoteModalOpen(true);
  };
  const products = [
    {
      title: "Premium Plywood",
      description: "High-quality plywood for durable and elegant furniture",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285320/IMG_1505_llxmkb.jpg",
        { width: 700 }
      ),
      features: ["Waterproof", "Termite Resistant", "Multiple Thickness"],
      link: "/interior/aangan-plywood"
    },
    {
      title: "Plain Laminates",
      description: "Smooth, elegant laminates in various colors",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786293528/4429_fvxzld.jpg",
        { width: 700 }
      ),
      features: ["Scratch Resistant", "Easy Maintenance", "Wide Color Range"],
      link: "/interior/aangan-plain-laminate"
    },
    {
      title: "Mocco Laminates",
      description: "Textured laminates with sophisticated patterns",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786293528/4409_bwmn3v.jpg",
        { width: 700 }
      ),
      features: ["Unique Textures", "Premium Finish", "Durable Surface"],
      link: "/interior/aangan-mocco-laminate"
    },
    {
      title: "Acrylic Sheets",
      description: "Versatile acrylic for modern interior applications",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786261720/IMG_1436_tkyjgo.jpg",
        { width: 700 }
      ),
      features: ["High Gloss", "UV Resistant", "Multiple Colors"],
      link: "/interior/aangan-acrylic"
    },
    {
      title: "Louvers",
      description: "Stylish louvers for ventilation and aesthetics",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285201/IMG_1412_oonk08.jpg",
        { width: 700 }
      ),
      features: ["Ventilation", "Privacy", "Modern Design"],
      link: "/louvers"
    },
    {
      title: "Aangan Veneers",
      description:
        "Thin natural wood overlays for a rich, warm and sophisticated wooden finish",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786298830/images_56_blqkx5.jpg",
        { width: 700 }
      ),
      features: [
        "100% Natural Wood",
        "Unique Grain Patterns",
        "Premium Finish"
      ],
      link: "/interior/veneer"
    },
    {
      title: "PU Wall Panels",
      description:
        "High-density polyurethane panels offering a stunning stone-imitation facade",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1790606084/images_wgivjn.jpg",
        { width: 700 }
      ),
      features: [
        "Realistic Slate Textures",
        "Lightweight & Sturdy",
        "Water & Impact Resistant"
      ],
      link: "/interior/pu-wall-panel"
    },
    {
      title: "Moulding Patti",
      description:
        "Elegant PVC, WPC, or wooden trim profiles to conceal joints and refine edges",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1790427498/images_2_ur4vft.jpg",
        { width: 700 }
      ),
      features: [
        "Conceals Gaps & Joints",
        "Brushed Metallic Trims",
        "Durable Borders"
      ],
      link: "/interior/moulding-patti"
    },
    {
      title: "False Ceiling & ACP",
      description:
        "Transformative plaster of Paris (POP) structures and weather-resistant ACP facades",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786297500/images_43_zw8t4m.jpg",
        { width: 700 }
      ),
      features: [
        "Artisan POP Ceilings",
        "Weatherproof Exterior ACP",
        "Ambient Cove Lighting"
      ],
      link: "/interior/false-ceiling"
    }
  ];

  return (
    <div className="interior page-transition">
      {/* Hero Section */}
      <PageHero
        title="Interior Items"
        subtitle="Premium materials for stunning interiors - plywood, laminates, acrylic and more"
        breadcrumbs={[{ label: "Interior Items" }]}
        variant="primary"
        backgroundImage={optimizeImageUrl(
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
          { width: 1400 }
        )}
      />

      {/* Products Section - Gallery Editorial Grid */}
      <section className="products-section section bg-mesh">
        <div className="container">
          <div className="category-header-bar">
            <div className="category-header-info">
              <span className="category-eyebrow">Aangan Interior Collection</span>
              <h2>Premium Architectural Materials</h2>
              <p>Explore our complete range of ISI-grade plywood, bespoke laminates, veneers and decorative surfaces.</p>
            </div>
            {/* <div className="category-header-action">
              <a
                href="https://aangangroup.in/images/categories/aangan-plywood.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="main-catalog-btn"
                title="Download Complete Interior Catalog PDF"
              >
                <FaDownload className="btn-icon" />
                <span>Download Interior Catalog</span>
              </a>
            </div> */}
          </div>

          <div className="gallery-grid">
            {products.map((product, index) => (
              <ScrollReveal
                key={product.title}
                direction="up"
                delay={index * 0.05}
              >
                <div className="gallery-item group">
                  <div className="gallery-image-wrapper">
                    <LazyImage
                      src={product.image}
                      alt={product.title}
                      className="gallery-image"
                      width={700}
                    />
                    <span className="gallery-badge">
                      Premium Quality
                    </span>
                  </div>

                  <div className="gallery-content">
                    <h3 className="gallery-title">{product.title}</h3>
                    <p className="gallery-desc">{product.description}</p>

                    <div className="gallery-actions">
                      <button
                        className="action-pill quote-btn"
                        onClick={() => openQuoteModal(product.title)}
                      >
                        <FaQuoteRight /> Quote
                      </button>
                      <Link
                        to={product.link}
                        className="action-pill primary"
                      >
                        Details <FaArrowRight />
                      </Link>
                      <a
                        href={`http://wa.me/917069630777?text=Hi, I'm interested in ${product.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-pill whatsapp"
                        aria-label="Contact on WhatsApp"
                      >
                        <FaWhatsapp />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-sm">
        {/* Particles Removed */}
        <div className="container">
          <ScrollReveal direction="up">
            <div className="cta-content">
              <h2>Need Help Choosing?</h2>
              <p>
                Our experts are here to guide you in selecting the perfect
                materials for your project
              </p>
              <div className="cta-actions">
                <a
                  href="http://wa.me/917069630777?text=Hi!%20I%27m%20interested%20in%20Aangan%20Decor%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Contact Our Experts
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Request Samples
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productTitle={selectedProduct}
      />
    </div>
  );
}

export default Interior;
