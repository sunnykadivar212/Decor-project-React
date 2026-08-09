import ProductPage from "./ProductPage";

function AFab() {
  const afabOptions = [
    {
      name: "Acoustic Wall Panels",
      description: "Sound-dampening textiles with luxury finishes",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786294859/Acoustic_fabric_Shades_kfhopy.webp"
    },
    {
      name: "Suede Wall Wraps",
      description: "Velvety soft textures for elite interiors",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786294856/images_2_tqtj05.jpg"
    },
    {
      name: "Hand-Woven Textures",
      description: "Organic fiber weaves for natural warmth",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786294856/WhatsAppImage2020-04-27at8.34.43PM_lyscis.jpg"
    },
    {
      name: "Embossed Fabric Strips",
      description: "Artistic 3D patterns on premium textile bases",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786294855/images_3_t8dulk.jpg"
    }
  ];

  return (
    <ProductPage
      title="A-Fab Specialty Materials"
      description="The intersection of textile art and architecture. Our AFab collection offers exclusive fabric-based materials that provide acoustic benefits and unparalleled tactile luxury."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786289539/A-fab_qh2tkp.jpg"
      features={[
        "Premium textile-to-panel integration",
        "Certified acoustic dampening properties",
        "Stain-resistant and flame-retardant fabrics",
        "Soft-touch tactile experience",
        "Hand-woven and artisanal textures",
        "Seamless installation for luxury feature walls"
      ]}
      pdfLink="https://aangangroup.in/images/categories/a-fab.pdf"
      color="primary"
      options={afabOptions}
      heroImage="https://images.unsplash.com/photo-1521405919366-6da67685934a?w=1600&q=80"
    />
  );
}

export default AFab;
