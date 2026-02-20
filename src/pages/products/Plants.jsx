import ProductPage from './ProductPage';

function Plants() {
  const plantOptions = [
    {
      name: "Monstera Deliciosa",
      description: "Iconic swiss-cheese plant for a tropical feel",
      image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80"
    },
    {
      name: "Fiddle Leaf Fig",
      description: "Elegant large leaves for a dramatic statement",
      image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=800&q=80"
    },
    {
      name: "Sansevieria Snake",
      description: "Low-maintenance architectural greenery",
      image: "https://images.unsplash.com/photo-1620127252536-03bdfcf7e41a?w=800&q=80"
    },
    {
      name: "Zen Bonsai",
      description: "Meticulously pruned miniature tree for focused peace",
      image: "https://images.unsplash.com/photo-1520302630591-fd1c66ed115d?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Indoor Plants"
      description="Breathe life into your home. Our collection of premium indoor plants and exotic greenery is curated to improve air quality and add a refreshing natural touch to your decor."
      image="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=1200&q=80"
      features={[
        'Healthy and well-established plants',
        'Natural air purification properties',
        'Low-maintenance and hardy varieties',
        'Includes premium ceramic or terracotta pots',
        'Expert plant care guides provided',
        'Various sizes from tabletop to floor-standing',
      ]}
      pdfLink="/catalogs/plants.pdf"
      color="decorative"
      options={plantOptions}
      heroImage="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=1600&q=80"
    />
  );
}

export default Plants;
