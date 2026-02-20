import ProductPage from './ProductPage';

function AanganDecorative() {
  const decorativeOptions = [
    {
      name: "Wall Paneling",
      description: "Architectural 3D panels for feature walls",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
    },
    {
      name: "Decorative Louvers",
      description: "Elegant vertical slat patterns for modern interiors",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
    },
    {
      name: "Highlighter Sheets",
      description: "Eye-catching metallic and stone highlights",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    },
    {
      name: "Carved Grills",
      description: "Intricate CNC-carved patterns for partitions",
      image: "https://images.unsplash.com/photo-1482449609509-eae2a7ea42b7?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Aangan Decorative"
      description="Elevate your space with our exclusive collection of decorative elements. From sophisticated wall panels to intricate louvers, we provide the accents that transform a house into a home."
      image="https://images.unsplash.com/photo-1615529182906-134d193ef2d5?w=1200&q=80"
      features={[
        'Exclusive artisanal designs',
        'High-quality MDF and Charcoal bases',
        'Easy to install interlocking systems',
        'Wide variety of luxury finishes',
        'Perfect for feature walls and ceilings',
        'Custom designs on request',
      ]}
      pdfLink="https://aangangroup.in/images/categories/aangan-decorative.pdf"
      color="decorative"
      options={decorativeOptions}
      heroImage="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=1600&q=80"
    />
  );
}

export default AanganDecorative;
