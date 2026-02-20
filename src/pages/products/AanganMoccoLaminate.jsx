import ProductPage from './ProductPage';

function AanganMoccoLaminate() {
  const moccoOptions = [
    {
      name: "Stone Texture",
      description: "Organic feel with natural pits and mineral patterns",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80"
    },
    {
      name: "Natural Wood Grain",
      description: "Hyper-realistic timber patterns with deep grooves",
      image: "https://images.unsplash.com/photo-1567016432779-094069958bc5?w=800&q=80"
    },
    {
      name: "Fabric Elements",
      description: "Soft textile-inspired surfaces for cozy interiors",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    {
      name: "Industrial Slate",
      description: "Dark, moody charcoal texture with slate finish",
      image: "https://images.unsplash.com/photo-1591210956975-a38ef71ade02?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Aangan Mocco Laminate"
      description="Where texture defines character. The Mocco collection features advanced embossed levels that replicate stone, fabric, and exotic woods with stunning realism."
      image="https://images.unsplash.com/photo-1600585154526-990dcea4db0d?w=1200&q=80"
      features={[
        'Deep synchronized textures',
        'Highly realistic natural visuals',
        'Advanced fingerprint resistance',
        'Antibacterial surface protection',
        'Heavy-duty wear resistance',
        'Premium decorative aesthetics',
      ]}
      pdfLink="https://aangangroup.in/images/categories/aangan-mocco-laminate.pdf"
      color="laminate"
      options={moccoOptions}
      heroImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
    />
  );
}

export default AanganMoccoLaminate;
