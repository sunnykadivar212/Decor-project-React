import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import './Shop.css';

function Shop() {
  const categories = [
    {
      title: 'Plywood',
      description: 'Premium quality plywood for all applications',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80',
      link: '/plywood',
    },
    {
      title: 'Laminates',
      description: 'Wide range of decorative laminates',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      link: '/laminate',
    },
    {
      title: 'Acrylic',
      description: 'High-quality acrylic sheets and panels',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80',
      link: '/aangan-acrylic',
    },
    {
      title: 'Louvers',
      description: 'Modern louver designs for ventilation',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80',
      link: '/louvers',
    },
    {
      title: 'Mandala Art',
      description: 'Intricate handcrafted mandala designs',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
      link: '/mandala-art',
    },
    {
      title: 'Decorative',
      description: 'Unique decorative accents and pieces',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80',
      link: '/decorative',
    },
    {
      title: 'Plants',
      description: 'Beautiful indoor plants for your space',
      image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&q=80',
      link: '/plants',
    },
    {
      title: 'A-Fab',
      description: 'Premium fabric-based materials',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      link: '/a-fab',
    },
  ];

  return (
    <div className="shop page-transition">
      {/* Hero Section */}
      <PageHero
        title="Shop Our Collection"
        subtitle="Explore our premium range of interior and decorative products"
        breadcrumbs={[{ label: 'Shop' }]}
        variant="secondary"
      />

      {/* Categories Grid */}
      <section className="shop-categories section">
        <div className="container">
          <div className="shop-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                className="shop-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <Link to={category.link} className="shop-card-link">
                  <div className="shop-card-image">
                    <img src={category.image} alt={category.title} />
                    <div className="shop-card-overlay"></div>
                  </div>
                  <div className="shop-card-content">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                    <span className="shop-card-arrow">
                      View Products <FaArrowRight />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
