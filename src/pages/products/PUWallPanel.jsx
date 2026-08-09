import ProductPage from "./ProductPage";

function PUWallPanel() {
  const panelOptions = [
    {
      name: "Charcoal Rock Face",
      description: "Dramatic dark textures resembling volcanic basalt rock",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786298602/images_50_njjfiz.jpg"
    },
    {
      name: "Classic Slate Grey",
      description:
        "Elegant layered slate look with natural grey stone variations",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786298604/images_49_z2zl1l.jpg"
    },
    {
      name: "Earthy Sandstone",
      description: "Warm beige tones creating an organic, cozy atmosphere",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786298598/images_51_sqlzzk.jpg"
    },
    {
      name: "Stark White Brick",
      description: "Sleek, modern minimalist brick texture for urban lofts",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786298596/images_52_h6iikg.jpg"
    }
  ];

  return (
    <ProductPage
      title="PU Wall Panels"
      description="PU (Polyurethane) Wall Panels are Decorative wall coverings made from high-density polyurethane. Ideal for both interior and exterior applications, they offer an easy-to-install, cost-effective alternative to real stone, with excellent resistance to moisture, weather, and impact."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786298593/images_53_rjsqgx.jpg"
      features={[
        "High-density premium Polyurethane composition",
        "Realistic 3D stone, rock, and brick textures",
        "Super lightweight and easy to handle during installation",
        "100% moisture, weather, water, and impact resistant",
        "Quick installation with industrial adhesive or screws (No Mortar required)",
        "Ideal for feature walls, TV backdrops, office lobbies, and outdoor facades"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={panelOptions}
      heroImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
    />
  );
}

export default PUWallPanel;
