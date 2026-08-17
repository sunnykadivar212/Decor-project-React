import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaWhatsapp, FaQuoteRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../../components/common/PageHero/PageHero";
import ScrollReveal from "../../components/common/ScrollReveal/ScrollReveal";
import QuoteModal from "../../components/features/QuoteModal/QuoteModal";
import Newsletter from "../../components/features/Newsletter/Newsletter";
import LazyImage from "../../components/common/LazyImage/LazyImage";
import { optimizeImageUrl } from "../../utils/imageOptimizer";
import "./Decorative.css";

function Decorative() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const openQuoteModal = (productTitle) => {
    setSelectedProduct(productTitle);
    setIsQuoteModalOpen(true);
  };

  const tabs = [
    { id: "all", label: "All Items" },
    { id: "decor", label: "Artisan Decor" },
    { id: "furniture", label: "Luxury Furniture" },
    { id: "art", label: "Wall Art" }
  ];

  const products = [
    {
      title: "Mandala Art",
      description: "Intricate handcrafted mandala designs for wall decoration",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786287129/il_794xN.2688857519_ahre_anrxzz.jpg",
        { width: 700 }
      ),
      features: ["Handcrafted", "Multiple Sizes", "Custom Colors"],
      link: "/decorative/mandala-art",
      category: "art"
    },
    {
      title: "Decorative Accents",
      description: "Unique decorative pieces to enhance your space",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285380/1000093028_d2g3p1.jpg",
        { width: 700 }
      ),
      features: ["Unique Designs", "Premium Materials", "Easy Installation"],
      link: "/decorative/aangan-decorative",
      category: "decor"
    },
    {
      title: "Indoor Plants",
      description: "Beautiful plants to bring life to your interiors",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285379/1000093023_l7moih.jpg",
        { width: 700 }
      ),
      features: ["Low Maintenance", "Air Purifying", "Various Sizes"],
      link: "/decorative/plants",
      category: "decor"
    },
    {
      title: "Wall Art Vol 1",
      description: "Curated wall art pieces for modern spaces",
      image: optimizeImageUrl(
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        { width: 700 }
      ),
      features: ["Modern Designs", "Gallery Quality", "Ready to Hang"],
      link: "/decorative/aangan-vol-1",
      category: "art"
    },
    {
      title: "Wall Art Vol 2",
      description: "Elegant decorative panels for walls and partitions",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786287755/71vDD2QGl-L_wbkz2d.jpg",
        { width: 700 }
      ),
      features: ["3D Effects", "Lightweight", "Easy to Install"],
      link: "/decorative/aangan-vol-2",
      category: "art"
    },
    {
      title: "Luxury Artifacts",
      description: "Bespoke artifacts and curios for luxurious living",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285409/1000093048_pree6p.jpg",
        { width: 700 }
      ),
      features: ["Handcrafted", "Bespoke Curios", "Exquisite Detail"],
      link: "/decorative/artifacts",
      category: "decor"
    },
    {
      title: "Designer Mirrors",
      description: "Elegant mirrors that expand light and style",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296408/images_28_cwxoil.jpg",
        { width: 700 }
      ),
      features: ["Reflection Art", "Premium Frame", "Space-enhancing"],
      link: "/decorative/designer-mirrors",
      category: "decor"
    },
    {
      title: "Designer Lights",
      description: "Sophisticated lighting options for every ambiance",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296187/images_21_w6hfio.jpg",
        { width: 700 }
      ),
      features: ["Custom Ambiance", "Modern Chandeliers", "Energy Efficient"],
      link: "/decorative/designer-lights",
      category: "decor"
    },
    {
      title: "Designer Sofas",
      description:
        "Luxurious sofas combining ergonomic support with fine fabrics",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296635/images_34_w1cebm.jpg",
        { width: 700 }
      ),
      features: ["Premium Fabrics", "Ergonomic Support", "Custom Layouts"],
      link: "/decorative/designer-sofas",
      category: "furniture"
    },
    {
      title: "Designer Curtains",
      description: "Elite curtains and custom drapery for window dressings",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295606/images_11_c7dpmq.jpg",
        { width: 700 }
      ),
      features: ["Bespoke Fabrics", "Thermal Insulation", "Premium Textures"],
      link: "/decorative/curtains",
      category: "decor"
    },
    {
      title: "Designer Chairs",
      description: "Exquisite accent and lounge chairs for absolute comfort",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295884/images_16_ewyyfr.jpg",
        { width: 700 }
      ),
      features: ["Ergonomic Luxury", "Robust Frames", "Sleek Silhouettes"],
      link: "/decorative/designer-chairs",
      category: "furniture"
    },
    {
      title: "Dining Tables",
      description: "Stunning dining tables that anchor your feast and memory",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296865/images_37_lttvoa.jpg",
        { width: 700 }
      ),
      features: ["Solid Wood/Marble", "Robust Structure", "Architectural Base"],
      link: "/decorative/dining-tables",
      category: "furniture"
    },
    {
      title: "Center Tables",
      description:
        "Charming center and coffee tables to complete your living room",
      image: optimizeImageUrl(
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295196/bf111692bea12bca1e24d11699f91272_idn7yf.jpg",
        { width: 700 }
      ),
      features: ["Minimalist/Storage", "Sturdy Construction", "Luxury Veneers"],
      link: "/decorative/center-tables",
      category: "furniture"
    }
  ];

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div className="decorative page-transition">
      {/* Hero Section */}
      <PageHero
        title="Decorative Items"
        subtitle="Elegant mandala art, decorative accents, and luxury furniture to personalize your space"
        breadcrumbs={[{ label: "Decorative Items" }]}
        variant="secondary"
        backgroundImage={optimizeImageUrl(
          "https://images.unsplash.com/photo-1617104551722-3b2d51366400",
          { width: 1400 }
        )}
      />

      {/* Category Filter Tabs */}
      <section
        className="filter-section section-xs bg-mesh"
        style={{ paddingBottom: 0, paddingTop: "3rem" }}
      >
        <div className="container">
          <ScrollReveal direction="down">
            <div className="tabs-container">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Section - Gallery Editorial Grid */}
      <section
        className="products-section section bg-mesh"
        style={{ paddingTop: "2rem" }}
      >
        <div className="container">
          <motion.div layout className="gallery-grid">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={product.title}
                  className="gallery-item group"
                >
                  <div className="gallery-image-wrapper">
                    <LazyImage
                      src={product.image}
                      alt={product.title}
                      className="gallery-image"
                      width={700}
                    />
                    <span className="gallery-badge">
                      {product.category === "art"
                        ? "Wall Art"
                        : product.category === "furniture"
                          ? "Luxury Furniture"
                          : "Artisan Decor"}
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
                        href={`http://wa.me/917069621777?text=Hi, I'm interested in ${product.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-pill whatsapp"
                        aria-label="Contact on WhatsApp"
                      >
                        <FaWhatsapp />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-sm">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="cta-content">
              <h2>Need Custom Decorative Solutions?</h2>
              <p>
                Our design experts can help you create unique decorative pieces
                tailored to your style
              </p>
              <div className="cta-actions">
                <a
                  href="http://wa.me/917069621777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Contact Our Team
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Get a Quote
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Newsletter />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productTitle={selectedProduct}
      />
    </div>
  );
}

export default Decorative;
