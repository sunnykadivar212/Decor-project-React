import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../common/ScrollReveal/ScrollReveal';
import LazyImage from '../../common/LazyImage/LazyImage';
import './HorizontalPortfolio.css';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    image: "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786299843/images_59_aojqm9.jpg",
    title: "Modern Living Room",
    category: "Interior Design",
    description: "Contemporary elegance meets functional comfort in this bespoke living space",
    link: "/interior"
  },
  {
    image: "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296639/images_32_gwgu3v.jpg",
    title: "Luxury Sofa Collection",
    category: "Furniture",
    description: "Handcrafted seating designed for timeless sophistication and unmatched comfort",
    link: "/interior"
  },
  {
    image: "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786287129/il_794xN.2688857519_ahre_anrxzz.jpg",
    title: "Artisan Mandala Art",
    category: "Decorative",
    description: "Sacred geometry meets modern wall art — handcrafted precision in every detail",
    link: "/decorative"
  },
  {
    image: "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296187/images_21_w6hfio.jpg",
    title: "Designer Lighting",
    category: "Lighting",
    description: "Sculptural luminaires that transform any room into an ambient masterpiece",
    link: "/interior"
  },
  {
    image: "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786286573/DG-08_nqur4o.jpg",
    title: "Premium Laminates",
    category: "Interior",
    description: "ISI-grade laminate finishes curated from India's top manufacturers",
    link: "/interior"
  },
  {
    image: "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296870/images_35_l2cawn.jpg",
    title: "Dining Elegance",
    category: "Furniture",
    description: "Where everyday meals become memorable — bespoke dining sets for every home",
    link: "/interior"
  }
];

const HorizontalPortfolio = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.matchMedia();

    ctx.add("all", () => {
      if (!trackRef.current || !sectionRef.current) return;
      const track = trackRef.current;
      const totalScrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScrollWidth}`,
          invalidateOnRefresh: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hp-section" aria-label="Portfolio" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="hp-header">
          <ScrollReveal direction="up">
            <div className="section-header">
              <span className="section-eyebrow">Portfolio</span>
              <h2>From Our Portfolio</h2>
              <p>A glimpse into the spaces we have transformed with artisanal craftsmanship</p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Horizontal Track */}
      <div className="hp-viewport">
        <div ref={trackRef} className="hp-track">
          {portfolioItems.map((item, i) => (
            <Link 
              to={item.link} 
              className="hp-card" 
              key={item.title} 
              style={{ display: 'block', textDecoration: 'none' }}
            >
              <div className="hp-card-inner">
                <div className="hp-card-img">
                  <LazyImage
                    src={item.image}
                    alt={item.title}
                    width={500}
                  />
                  <div className="hp-card-shine" />
                </div>
                <div className="hp-card-overlay">
                  <span className="hp-card-cat">{item.category}</span>
                  <h3 className="hp-card-title">{item.title}</h3>
                  <p className="hp-card-desc">{item.description}</p>
                  <div className="hp-card-link">
                    <span>View Details</span>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* End spacer so the last item isn't glued to the right edge */}
          <div style={{ width: '5vw', flexShrink: 0 }} />
        </div>
      </div>

      {/* Actions */}
      <div className="container">
        <div className="hp-actions">
          <Link to="/interior" className="hp-action-btn hp-action-primary">
            View Interior Range
            <FaArrowRight />
          </Link>
          <Link to="/decorative" className="hp-action-btn hp-action-outline">
            Browse Decorative Items
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HorizontalPortfolio;
