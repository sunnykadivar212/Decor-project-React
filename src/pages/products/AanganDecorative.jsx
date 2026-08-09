import ProductPage from "./ProductPage";

function AanganDecorative() {
  const decorativeOptions = [
    {
      name: "Wall Paneling",
      description: "Architectural 3D panels for feature walls",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786291318/Product_15_Wave_Pattern_Wall_1350x900_1-1024x683_t3t9lh.webp"
    },
    {
      name: "Decorative Louvers",
      description: "Elegant vertical slat patterns for modern interiors",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285197/IMG_1410_xtbg0k.jpg"
    },
    {
      name: "Highlighter Sheets",
      description: "Eye-catching metallic and stone highlights",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786291480/images_1_ol1a6v.jpg"
    },
    {
      name: "Carved Grills",
      description: "Intricate CNC-carved patterns for partitions",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786291601/jali-cnc-cutting-design_ubgrsk.jpg"
    }
  ];

  return (
    <ProductPage
      title="Aangan Decorative"
      description="Elevate your space with our exclusive collection of decorative elements. From sophisticated wall panels to intricate louvers, we provide the accents that transform a house into a home."
      image="https://images.unsplash.com/photo-1615529182906-134d193ef2d5?w=1200&q=80"
      features={[
        "Exclusive artisanal designs",
        "High-quality MDF and Charcoal bases",
        "Easy to install interlocking systems",
        "Wide variety of luxury finishes",
        "Perfect for feature walls and ceilings",
        "Custom designs on request"
      ]}
      pdfLink="https://aangangroup.in/images/categories/aangan-decorative.pdf"
      color="decorative"
      options={decorativeOptions}
      heroImage="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=1600&q=80"
    />
  );
}

export default AanganDecorative;
