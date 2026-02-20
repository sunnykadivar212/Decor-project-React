import ProductPage from './ProductPage';

function AanganPlainLaminate() {
  const laminateOptions = [
    {
      name: "Matte Finish",
      description: "Soft touch, non-reflective surface for elegant results",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    {
      name: "High Gloss",
      description: "Mirror-like shine for a luxurious, modern look",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80"
    },
    {
      name: "Suede Finish",
      description: "Micro-texture that feels like premium fabric",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    },
    {
      name: "Deep Texture",
      description: "Dramatic industrial and natural textures",
      image: "https://images.unsplash.com/photo-1628745277895-4a4e2d5fd5cb?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Aangan Plain Laminate"
      description="Refined simplicity meets durability. Our plain laminates offer a curated palette of solid colors with multiple finishing options for contemporary interiors."
      image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
      features={[
        'Vivid solid color collection',
        'Scratch, stain and impact resistant',
        'Easy to clean and maintain',
        'Anti-yellowing technology',
        'Perfect for residential and commercial use',
        'Available in multiple tactile finishes',
      ]}
      pdfLink="https://aangangroup.in/images/categories/aangan-plain-laminate.pdf"
      color="laminate"
      options={laminateOptions}
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
    />
  );
}

export default AanganPlainLaminate;
