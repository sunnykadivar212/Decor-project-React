import ProductPage from './ProductPage';

function AanganPlywood() {
  return (
    <ProductPage
      title="Aangan Plywood"
      description="Premium quality plywood for all your interior and construction needs"
      image="https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80"
      features={[
        'High-grade BWP and BWR plywood',
        'Termite and borer resistant',
        'Superior bonding strength',
        'Available in various thicknesses',
        'Ideal for furniture and interiors',
        'ISI certified quality',
      ]}
      pdfLink="https://aangangroup.in/images/categories/aangan-plywood.pdf"
      color="primary"
    />
  );
}

export default AanganPlywood;
