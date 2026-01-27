import ProductPage from '../products/ProductPage';

function PlywoodCategory() {
  return (
    <ProductPage
      title="Plywood"
      description="Premium quality plywood for all construction and interior needs"
      image="https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80"
      features={[
        'BWP and BWR grade plywood',
        'Termite resistant',
        'High bonding strength',
        'Various thicknesses',
        'ISI certified',
        'Ideal for furniture and construction',
      ]}
      color="primary"
    />
  );
}

export default PlywoodCategory;
