import ProductPage from './ProductPage';

function DesignerMirrors() {
  const mirrorOptions = [
    {
      name: "Ornate Gold Frame",
      description: "Vintage-inspired elegance for classic foyers",
      image: "https://images.unsplash.com/photo-1617806118233-18e1ff208fa0?w=800&q=80"
    },
    {
      name: "Modern Sunburst",
      description: "Artistic radial design for living room highlights",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
    },
    {
      name: "Minimalist Round",
      description: "Sleek black frame for contemporary bathrooms",
      image: "https://images.unsplash.com/photo-1613394697785-fc08aeffc6b6?w=800&q=80"
    },
    {
      name: "Venetian Etched",
      description: "Intricate glasswork for a luxurious crystalline look",
      image: "https://images.unsplash.com/photo-1616046338880-bb46bcf2e2fe?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Designer Mirrors"
      description="Reflect your style. Our designer mirrors aren't just for checking your appearance; they are designed to amplify light and add depth to your most cherished spaces."
      image="https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?w=1200&q=80"
      features={[
        'High-definition distortion-free glass',
        'Hand-finished artisan frames',
        'Anti-rust and moisture-resistant backing',
        'Safety-shatterproof technology',
        'Vertical and horizontal hanging options',
        'Creates an illusion of larger space',
      ]}
      pdfLink="/catalogs/mirrors.pdf"
      color="decorative"
      options={mirrorOptions}
      heroImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
    />
  );
}

export default DesignerMirrors;
