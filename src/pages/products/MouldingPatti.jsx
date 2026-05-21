import ProductPage from './ProductPage';

function MouldingPatti() {
  const mouldingOptions = [
    {
      name: "Champagne Gold Patti",
      description: "Luxurious brushed champagne gold for a sophisticated metallic trim",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
    },
    {
      name: "Natural Teak border",
      description: "Warm wooden profile moldings to finish classic furniture borders",
      image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80"
    },
    {
      name: "Rose Gold Trim",
      description: "Soft reflective rose gold metallic profiles to separate wall cladding panels",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    },
    {
      name: "Glossy Piano Black",
      description: "Sleek high-gloss black trims for bold modern transitions",
      image: "https://images.unsplash.com/photo-1508057198441-2a143d99616e?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Moulding Patti"
      description="Moulding Patti is a decorative trim used to enhance the edges, corners and transitions of walls, ceilings, doors or furniture. Made from materials like wood, PVC or WPC, it adds a stylish finish while concealing gaps and joints. Ideal for both modern and traditional interiors."
      image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
      features={[
        'Premium decorative trim for walls, ceilings, and luxury furniture',
        'Crafted from durable, premium materials like Wood, WPC, and high-grade PVC',
        'Conceals structural gaps, joints, and transitions with unmatched elegance',
        'Easy to cut, shape, and install on flat or curved surfaces',
        'Available in brushed metallic, chrome, matte, and rich wood-grain finishes',
        'Adds structural depth, character, and luxury borders to simple walls',
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={mouldingOptions}
      heroImage="https://images.unsplash.com/photo-1541014169601-e6e737cbe113?w=1600&q=80"
    />
  );
}

export default MouldingPatti;
