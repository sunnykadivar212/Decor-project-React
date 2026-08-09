import ProductPage from "./ProductPage";

function MandalaArt() {
  const mandalaOptions = [
    {
      name: "Traditional Sacred Geometry",
      description: "Intricate hand-painted patterns on canvas",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786297993/images_48_jnzit3.jpg"
    },
    {
      name: "Modern Metallic Mandala",
      description: "Gold and silver leafing for a luxurious glow",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786298105/images_47_o2b4uq.jpg"
    },
    {
      name: "Wood-Carved Mandala",
      description: "3D layered wood for deep architectural texture",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786287129/il_794xN.2688857519_ahre_anrxzz.jpg"
    },
    {
      name: "Cosmic Mandala",
      description: "Vibrant colors inspired by celestial bodies",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786298108/images_46_rqqzld.jpg"
    }
  ];

  return (
    <ProductPage
      title="Mandala Art"
      description="The geometry of the soul. Our Mandala art collection brings meditative harmony and intricate beauty to your walls, handcrafted by master artisans."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786288447/il_794xN.4114148167_shj0-300x225_abyzzk.jpg"
      features={[
        "Authentic hand-painted sacred geometry",
        "Premium archive-quality canvas and pigments",
        "Intricate 3D layering and texture",
        "Symbolic designs for peace and meditation",
        "Available in various sizes and color palettes",
        "Ready-to-hang museum-grade framing"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={mandalaOptions}
      heroImage="https://images.unsplash.com/photo-1549490349-8643362247b5?w=1600&q=80"
    />
  );
}

export default MandalaArt;
