import ProductPage from './ProductPage';

function Veneer() {
  const veneerOptions = [
    {
      name: "Natural Teak Veneer",
      description: "Warm golden-brown hues with classic straight grain lines",
      image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80"
    },
    {
      name: "Dark Smoked Oak",
      description: "Deep, chocolatey tones with elegant architectural texture",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80"
    },
    {
      name: "European Walnut",
      description: "Rich wavy grain patterns for high-end luxury furniture",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    },
    {
      name: "Exotic Smoked Ash",
      description: "Sophisticated grey-black palette with vibrant figure lines",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Aangan Veneers"
      description="Veneer is a thin layer of natural wood applied to surfaces to give furniture and interiors a premium, elegant wooden finish while maintaining cost-effectiveness and durability."
      image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
      features={[
        '100% natural wood decorative surface',
        'Rich, unique grain patterns sourced from premium timbers',
        'Eco-friendly and highly sustainable wood panels',
        'Premium resistance to cracking, warping, and splitting',
        'Adds luxury, depth, and warmth to any residential or commercial interior',
        'Excellent response to wood polishing and staining finishes',
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="plywood"
      options={veneerOptions}
      heroImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
    />
  );
}

export default Veneer;
