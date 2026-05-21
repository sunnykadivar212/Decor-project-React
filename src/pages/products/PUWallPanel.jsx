import ProductPage from './ProductPage';

function PUWallPanel() {
  const panelOptions = [
    {
      name: "Charcoal Rock Face",
      description: "Dramatic dark textures resembling volcanic basalt rock",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
    },
    {
      name: "Classic Slate Grey",
      description: "Elegant layered slate look with natural grey stone variations",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
    },
    {
      name: "Earthy Sandstone",
      description: "Warm beige tones creating an organic, cozy atmosphere",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80"
    },
    {
      name: "Stark White Brick",
      description: "Sleek, modern minimalist brick texture for urban lofts",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="PU Wall Panels"
      description="PU (Polyurethane) Wall Panels are Decorative wall coverings made from high-density polyurethane. Ideal for both interior and exterior applications, they offer an easy-to-install, cost-effective alternative to real stone, with excellent resistance to moisture, weather, and impact."
      image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80"
      features={[
        'High-density premium Polyurethane composition',
        'Realistic 3D stone, rock, and brick textures',
        'Super lightweight and easy to handle during installation',
        '100% moisture, weather, water, and impact resistant',
        'Quick installation with industrial adhesive or screws (No Mortar required)',
        'Ideal for feature walls, TV backdrops, office lobbies, and outdoor facades',
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={panelOptions}
      heroImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
    />
  );
}

export default PUWallPanel;
