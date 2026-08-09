import ProductPage from "./ProductPage";

function DesignerLights() {
  const lightOptions = [
    {
      name: "Crystal Chandelier",
      description: "Regal lighting for grand dining and entryways",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296182/images_23_yqacck.jpg"
    },
    {
      name: "Modern Pendant",
      description: "Sleek, focused lighting for kitchens and bars",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296192/images_19_h6yh6l.jpg"
    },
    {
      name: "Architectural Floor Lamp",
      description: "Statement piece for reading and ambient corners",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296187/images_21_w6hfio.jpg"
    },
    {
      name: "Designer Wall Scones",
      description: "Elegant accent lighting for hallways and bedsides",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296182/images_23_yqacck.jpg"
    }
  ];

  return (
    <ProductPage
      title="Designer Lights"
      description="Illuminating excellence. Our designer lighting fixtures are engineered to cast the perfect glow while serving as stunning sculptural elements in your home."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296189/images_20_irgokc.jpg"
      features={[
        "High-efficiency LED integration",
        "Premium brass, chrome, and crystal finishes",
        "Adjustable brightness and color temperature",
        "Architectural-grade wiring and safety",
        "Unique artisanal glass blowing",
        "Available in a wide range of styles"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={lightOptions}
      heroImage="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1600&q=80"
    />
  );
}

export default DesignerLights;
