import ProductPage from "./ProductPage";

function DesignerSofas() {
  const sofaOptions = [
    {
      name: "Luxury Sectional",
      description: "Expansive comfort for large living spaces",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296639/images_32_gwgu3v.jpg"
    },
    {
      name: "Classic Chesterfield",
      description: "Timeless tufted leather design",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296657/images_30_vk9qdq.jpg"
    },
    {
      name: "Velvet Accent Sofa",
      description: "Soft textures and bold jewel tones",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296642/images_31_b3byto.jpg"
    },
    {
      name: "Modern Recliner",
      description: "Advanced ergonomics with sleek aesthetics",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296637/images_33_x6wfeg.jpg"
    }
  ];

  return (
    <ProductPage
      title="Designer Sofas"
      description="Where comfort meets artistry. Our designer sofas are handcrafted with premium textiles and ergonomic frames to become the centerpiece of your luxury living room."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296635/images_34_w1cebm.jpg"
      features={[
        "High-density premium foam cushioning",
        "Solid teak wood inner frames",
        "Stain-resistant luxury fabrics",
        "Ergonomic lumbar support",
        "Contemporary and classic silhouettes",
        "Available in 100+ fabric options"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={sofaOptions}
      heroImage="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=80"
    />
  );
}

export default DesignerSofas;
