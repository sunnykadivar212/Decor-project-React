import ProductPage from './ProductPage';

function Artifacts() {
  const artifactOptions = [
    {
      name: "Hand-Cast Sculptures",
      description: "Abstract modern forms in bronze and resin",
      image: "https://images.unsplash.com/photo-1544413660-299165566b1d?w=800&q=80"
    },
    {
      name: "Artisan Ceramic Vases",
      description: "Organic shapes with unique reactive glazes",
      image: "https://images.unsplash.com/photo-1578500438901-22c953c7af22?w=800&q=80"
    },
    {
      name: "Luxury Display Trays",
      description: "Marble and brass accents for tabletop styling",
      image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&q=80"
    },
    {
      name: "Designer Bookends",
      description: "Structural elements for your personal library",
      image: "https://images.unsplash.com/photo-1513519247341-33ae85703f84?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Luxury Artifacts"
      description="The finishing touch for a perfect interior. Our collection of luxury artifacts features hand-selected pieces that tell a story of craftsmanship and sophisticated taste."
      image="https://images.unsplash.com/photo-1544413660-299165566b1d?w=1200&q=80"
      features={[
        'Handpicked from global master artisans',
        'Limited edition and one-of-a-kind pieces',
        'Premium materials: Bronze, Marble, Crystal',
        'Sophisticated modern and ethnic styles',
        'Ideal for gifting and home styling',
        'Perfectly weighted and finished',
      ]}
      pdfLink="/catalogs/artifacts.pdf"
      color="decorative"
      options={artifactOptions}
      heroImage="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=1600&q=80"
    />
  );
}

export default Artifacts;
