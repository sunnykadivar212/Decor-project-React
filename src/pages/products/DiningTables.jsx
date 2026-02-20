import ProductPage from './ProductPage';

function DiningTables() {
  const tableOptions = [
    {
      name: "Italian Marble Top",
      description: "Luxurious natural stone with unique veining",
      image: "https://images.unsplash.com/photo-1617806118233-18e1ff208fa0?w=800&q=80"
    },
    {
      name: "Solid Oak Wood",
      description: "Rustic warmth with generational durability",
      image: "https://images.unsplash.com/photo-1577146333359-b9f4b3c491c1?w=800&q=80"
    },
    {
      name: "Tempered Glass Modern",
      description: "Sleek and airy design for open spaces",
      image: "https://images.unsplash.com/photo-1530018607912-eff2df114f11?w=800&q=80"
    },
    {
      name: "Industrial Metal Base",
      description: "Bold architectural presence for urban lofts",
      image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Dining Tables"
      description="Gather around perfection. Our dining tables are masterpieces of design, crafted from the finest materials to host your most memorable moments."
      image="https://images.unsplash.com/photo-1617806118233-18e1ff208fa0?w=1200&q=80"
      features={[
        'Premium Italian marble and solid wood tops',
        'Anti-scratch and heat-resistant finishes',
        'Engineered for maximum stability',
        'Available in all standard and custom sizes',
        'Architectural leg designs',
        'Easy to clean and maintain',
      ]}
      pdfLink="/catalogs/dining-tables.pdf"
      color="decorative"
      options={tableOptions}
      heroImage="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1600&q=80"
    />
  );
}

export default DiningTables;
