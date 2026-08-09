import ProductPage from "./ProductPage";

function AanganAcrylic() {
  const acrylicOptions = [
    {
      name: "Super Glossy",
      description: "Ultra-high shine Acrylic with mirror-like clarity",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786261724/IMG_1441_oueepy.jpg"
    },
    {
      name: "Metallic Acrylic",
      description: "Sophisticated shimmer with metallic pigments",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786261720/IMG_1427_alvq1n.jpg"
    },
    {
      name: "Anti-Scratch Matte",
      description: "Velvety finish that resists everyday wear",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786261718/IMG_1434_ckkk0n.jpg"
    },
    {
      name: "Crystal Sparkle",
      description: "Subtle glitter effect for a magical interior touch",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786261722/IMG_1438_bzupkr.jpg"
    }
  ];

  return (
    <ProductPage
      title="Aangan Acrylic"
      description="The ultimate in high-gloss luxury. Our premium Acrylic sheets offer incredible depth of color and a flawless, mirror-like finish for high-end cabinetry and panels."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786261727/IMG_1439_ldwy6s.jpg"
      features={[
        "Unmatched high-gloss depth",
        "Superior scratch resistance",
        "No orange peel effect",
        "Easy to clean and highly hygienic",
        "UV and color fade resistant",
        "Perfect for premium kitchens and wardrobes"
      ]}
      pdfLink="https://aangangroup.in/images/categories/aangan-acrylic.pdf"
      color="laminate"
      options={acrylicOptions}
      heroImage="https://images.unsplash.com/photo-1556909212-d5b6043929f1?w=1600&q=80"
    />
  );
}

export default AanganAcrylic;
