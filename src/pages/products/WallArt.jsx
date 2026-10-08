import ProductPage from './ProductPage';

function WallArt() {
  return (
    <ProductPage
      title="Wall Art Collection"
      description="Curated wall art pieces for modern spaces. A sophisticated range of artistic elements focusing on modern aesthetics and tactile surfaces that define luxury spaces."
      image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
      features={[
        'Classic wood grain textures',
        'Modern abstract patterns',
        "High-gloss 'Mirror' finish",
        'Deep matte tactile surfaces',
        'Premium edge-to-edge finish',
        'Universal design appeal',
      ]}
      pdfLink="https://aangangroup.in/images/categories/aangan-vol-1.pdf"
      color="laminate"
      heroImage="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1600&q=80"
    />
  );
}

export default WallArt;
