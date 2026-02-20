import ProductPage from './ProductPage';

function AanganAcrylic() {
  const acrylicOptions = [
    {
      name: "Super Glossy",
      description: "Ultra-high shine Acrylic with mirror-like clarity",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80"
    },
    {
      name: "Metallic Acrylic",
      description: "Sophisticated shimmer with metallic pigments",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    },
    {
      name: "Anti-Scratch Matte",
      description: "Velvety finish that resists everyday wear",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    {
      name: "Crystal Sparkle",
      description: "Subtle glitter effect for a magical interior touch",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Aangan Acrylic"
      description="The ultimate in high-gloss luxury. Our premium Acrylic sheets offer incredible depth of color and a flawless, mirror-like finish for high-end cabinetry and panels."
      image="https://images.unsplash.com/photo-1556912176-117565860352?w=1200&q=80"
      features={[
        'Unmatched high-gloss depth',
        'Superior scratch resistance',
        'No orange peel effect',
        'Easy to clean and highly hygienic',
        'UV and color fade resistant',
        'Perfect for premium kitchens and wardrobes',
      ]}
      pdfLink="https://aangangroup.in/images/categories/aangan-acrylic.pdf"
      color="laminate"
      options={acrylicOptions}
      heroImage="https://images.unsplash.com/photo-1556909212-d5b6043929f1?w=1600&q=80"
    />
  );
}

export default AanganAcrylic;
