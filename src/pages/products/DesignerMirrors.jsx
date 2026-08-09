import ProductPage from "./ProductPage";

function DesignerMirrors() {
  const mirrorOptions = [
    {
      name: "Ornate Gold Frame",
      description: "Vintage-inspired elegance for classic foyers",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296414/images_26_amginj.jpg"
    },
    {
      name: "Modern Sunburst",
      description: "Artistic radial design for living room highlights",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296411/images_27_uhclbj.jpg"
    },
    {
      name: "Minimalist Round",
      description: "Sleek black frame for contemporary bathrooms",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296408/images_28_cwxoil.jpg"
    },
    {
      name: "Venetian Etched",
      description: "Intricate glasswork for a luxurious crystalline look",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296406/images_29_mj4iea.jpg"
    }
  ];

  return (
    <ProductPage
      title="Designer Mirrors"
      description="Reflect your style. Our designer mirrors aren't just for checking your appearance; they are designed to amplify light and add depth to your most cherished spaces."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296416/images_25_zmhvfr.jpg"
      features={[
        "High-definition distortion-free glass",
        "Hand-finished artisan frames",
        "Anti-rust and moisture-resistant backing",
        "Safety-shatterproof technology",
        "Vertical and horizontal hanging options",
        "Creates an illusion of larger space"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={mirrorOptions}
      heroImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
    />
  );
}

export default DesignerMirrors;
