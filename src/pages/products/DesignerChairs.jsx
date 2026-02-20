import ProductPage from './ProductPage';

function DesignerChairs() {
  const chairOptions = [
    {
      name: "Luxury Accent Chair",
      description: "Statement piece with premium fabric/leather",
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80"
    },
    {
      name: "Wingback Lounge",
      description: "Ergonomic comfort with high-back support",
      image: "https://images.unsplash.com/photo-1567016432779-094069958bc5?w=800&q=80"
    },
    {
      name: "Modern Dining Chair",
      description: "Sleek and sturdy seating for dining spaces",
      image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80"
    },
    {
      name: "Executive Office Chair",
      description: "Premium leather with high-end ergonomics",
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Designer Chairs"
      description="Elevate your seating experience with our designer collection. From iconic lounge chairs to ergonomic office solutions, we bring together world-class comfort and design."
      image="https://images.unsplash.com/photo-1592078615290-033ee584e267?w=1200&q=80"
      features={[
        'Ergonomically designed for long-term comfort',
        'Hand-finished premium upholstery',
        'Solid wood and brushed metal frame options',
        'Unique artistic silhouettes',
        'Available in fabric, velvet, and top-grain leather',
        'Perfect for residential and commercial spaces',
      ]}
      pdfLink="/catalogs/chairs.pdf"
      color="decorative"
      options={chairOptions}
      heroImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
    />
  );
}

export default DesignerChairs;
