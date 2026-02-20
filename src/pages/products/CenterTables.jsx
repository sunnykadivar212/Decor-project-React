import ProductPage from './ProductPage';

function CenterTables() {
  const tableOptions = [
    {
      name: "Double Nesting Tables",
      description: "Flexible design with space-saving capabilities",
      image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&q=80"
    },
    {
      name: "Art Deco Glass",
      description: "Elegant geometric patterns with gold accents",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80"
    },
    {
      name: "Rustic Live Edge",
      description: "Unique natural wood slab with organic edges",
      image: "https://images.unsplash.com/photo-1554108292-628f328f4205?w=800&q=80"
    },
    {
      name: "Marble Monolith",
      description: "Solid block marble for a powerful presence",
      image: "https://images.unsplash.com/photo-1577146333359-b9f4b3c491c1?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Center Tables"
      description="The soul of your seating area. Our center tables are designed to complement your lifestyle while adding a layer of sophistication to your living room."
      image="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=1200&q=80"
      features={[
        'Unique centerpiece designs',
        'High-quality glass, marble, and wood',
        'Child-safe rounded edge options',
        'Built-in storage compartments available',
        'Artistic and functional silhouettes',
        'Durable and easy-to-clean surfaces',
      ]}
      pdfLink="/catalogs/center-tables.pdf"
      color="decorative"
      options={tableOptions}
      heroImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
    />
  );
}

export default CenterTables;
