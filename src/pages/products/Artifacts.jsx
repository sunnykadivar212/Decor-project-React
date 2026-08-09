import ProductPage from "./ProductPage";

function Artifacts() {
  const artifactOptions = [
    {
      name: "Hand-Cast Sculptures",
      description: "Abstract modern forms in bronze and resin",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285447/1000093057_m6stbh.jpg"
    },
    {
      name: "Artisan Ceramic Vases",
      description: "Organic shapes with unique reactive glazes",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285410/1000093053_xaayqt.jpg"
    },
    {
      name: "Luxury Display Trays",
      description: "Marble and brass accents for tabletop styling",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285395/1000093039_jzpubq.jpg"
    },
    {
      name: "Designer Bookends",
      description: "Structural elements for your personal library",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285401/1000093042_wo8zkg.jpg"
    }
  ];

  return (
    <ProductPage
      title="Luxury Artifacts"
      description="The finishing touch for a perfect interior. Our collection of luxury artifacts features hand-selected pieces that tell a story of craftsmanship and sophisticated taste."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285454/1000093060_qbtwtz.jpg"
      features={[
        "Handpicked from global master artisans",
        "Limited edition and one-of-a-kind pieces",
        "Premium materials: Bronze, Marble, Crystal",
        "Sophisticated modern and ethnic styles",
        "Ideal for gifting and home styling",
        "Perfectly weighted and finished"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={artifactOptions}
      heroImage="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=1600&q=80"
    />
  );
}

export default Artifacts;
