import ProductPage from './ProductPage';

function MandalaArt() {
  const mandalaOptions = [
    {
      name: "Traditional Sacred Geometry",
      description: "Intricate hand-painted patterns on canvas",
      image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=800&q=80"
    },
    {
      name: "Modern Metallic Mandala",
      description: "Gold and silver leafing for a luxurious glow",
      image: "https://images.unsplash.com/photo-1561484930-974b9022e657?w=800&q=80"
    },
    {
      name: "Wood-Carved Mandala",
      description: "3D layered wood for deep architectural texture",
      image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&q=80"
    },
    {
      name: "Cosmic Mandala",
      description: "Vibrant colors inspired by celestial bodies",
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Mandala Art"
      description="The geometry of the soul. Our Mandala art collection brings meditative harmony and intricate beauty to your walls, handcrafted by master artisans."
      image="https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=1200&q=80"
      features={[
        'Authentic hand-painted sacred geometry',
        'Premium archive-quality canvas and pigments',
        'Intricate 3D layering and texture',
        'Symbolic designs for peace and meditation',
        'Available in various sizes and color palettes',
        'Ready-to-hang museum-grade framing',
      ]}
      pdfLink="/catalogs/mandala-art.pdf"
      color="decorative"
      options={mandalaOptions}
      heroImage="https://images.unsplash.com/photo-1549490349-8643362247b5?w=1600&q=80"
    />
  );
}

export default MandalaArt;
