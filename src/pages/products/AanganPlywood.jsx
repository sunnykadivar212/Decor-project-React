import ProductPage from './ProductPage';

function AanganPlywood() {
  const plywoodOptions = [
    {
      name: "Commercial Plywood",
      description: "Premium MR Grade - Moisture Resistant",
      image: "https://images.unsplash.com/photo-1614624532983-4ce91afa51e0?w=800&q=80"
    },
    {
      name: "Marine Plywood",
      description: "BWP Grade - Boiling Water Proof (Superior Quality)",
      image: "https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?w=800&q=80"
    },
    {
      name: "Flexible Plywood",
      description: "Gurjan Plywood - Ideal for curved furniture",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
    },
    {
      name: "Film Faced Plywood",
      description: "Sturdy shuttering plywood for construction",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Aangan Plywood"
      description="Experience the strength of premium Gurjan and Hardwood plywood. Our products are termite-proof, borer-resistant, and built for a lifetime of durability."
      image="https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200&q=80"
      features={[
        'High-grade BWP and BWR plywood',
        'Termite and borer resistant (Gurjan Core)',
        'Superior bonding strength with PF Resin',
        'No core gaps for perfect screw holding',
        'Ideal for luxury furniture and interiors',
        'ISI certified quality assurance',
      ]}
      pdfLink="https://aangangroup.in/images/categories/aangan-plywood.pdf"
      color="plywood"
      options={plywoodOptions}
      heroImage="https://images.unsplash.com/photo-1541014169601-e6e737cbe113?w=1600&q=80"
    />
  );
}

export default AanganPlywood;
