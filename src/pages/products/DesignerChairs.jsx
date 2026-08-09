import ProductPage from "./ProductPage";

function DesignerChairs() {
  const chairOptions = [
    {
      name: "Luxury Accent Chair",
      description: "Statement piece with premium fabric/leather",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295886/images_15_fbzm7f.jpg"
    },
    {
      name: "Wingback Lounge",
      description: "Ergonomic comfort with high-back support",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295888/images_14_ynwrmw.jpg"
    },
    {
      name: "Modern Dining Chair",
      description: "Sleek and sturdy seating for dining spaces",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295881/images_17_x3jgjf.jpg"
    },
    {
      name: "Executive Office Chair",
      description: "Premium leather with high-end ergonomics",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295880/images_18_hemrbu.jpg"
    }
  ];

  return (
    <ProductPage
      title="Designer Chairs"
      description="Elevate your seating experience with our designer collection. From iconic lounge chairs to ergonomic office solutions, we bring together world-class comfort and design."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295884/images_16_ewyyfr.jpg"
      features={[
        "Ergonomically designed for long-term comfort",
        "Hand-finished premium upholstery",
        "Solid wood and brushed metal frame options",
        "Unique artistic silhouettes",
        "Available in fabric, velvet, and top-grain leather",
        "Perfect for residential and commercial spaces"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={chairOptions}
      heroImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
    />
  );
}

export default DesignerChairs;
