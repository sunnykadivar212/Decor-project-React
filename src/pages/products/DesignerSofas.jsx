import ProductPage from './ProductPage';

function DesignerSofas() {
  const sofaOptions = [
    {
      name: "Luxury Sectional",
      description: "Expansive comfort for large living spaces",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
    },
    {
      name: "Classic Chesterfield",
      description: "Timeless tufted leather design",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80"
    },
    {
      name: "Velvet Accent Sofa",
      description: "Soft textures and bold jewel tones",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80"
    },
    {
      name: "Modern Recliner",
      description: "Advanced ergonomics with sleek aesthetics",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Designer Sofas"
      description="Where comfort meets artistry. Our designer sofas are handcrafted with premium textiles and ergonomic frames to become the centerpiece of your luxury living room."
      image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80"
      features={[
        'High-density premium foam cushioning',
        'Solid teak wood inner frames',
        'Stain-resistant luxury fabrics',
        'Ergonomic lumbar support',
        'Contemporary and classic silhouettes',
        'Available in 100+ fabric options',
      ]}
      pdfLink="/catalogs/sofas.pdf"
      color="decorative"
      options={sofaOptions}
      heroImage="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=80"
    />
  );
}

export default DesignerSofas;
