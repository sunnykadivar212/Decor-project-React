import ProductPage from "./ProductPage";

function AanganPlywood() {
  const plywoodOptions = [
    {
      name: "Commercial Plywood",
      description: "Premium MR Grade - Moisture Resistant",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285360/IMG_1548_tcghqs.jpg"
    },
    {
      name: "Marine Plywood",
      description: "BWP Grade - Boiling Water Proof (Superior Quality)",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285311/IMG_1500_lyw1sq.jpg"
    },
    {
      name: "Flexible Plywood",
      description: "Gurjan Plywood - Ideal for curved furniture",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285264/IMG_1484_ywix65.jpg"
    },
    {
      name: "Film Faced Plywood",
      description: "Sturdy shuttering plywood for construction",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285259/IMG_1482_nz1eaa.jpg"
    }
  ];

  return (
    <ProductPage
      title="Aangan Plywood"
      description="Experience the strength of premium Gurjan and Hardwood plywood. Our products are termite-proof, borer-resistant, and built for a lifetime of durability."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285322/IMG_1506_uojhq9.jpg"
      features={[
        "High-grade BWP and BWR plywood",
        "Termite and borer resistant (Gurjan Core)",
        "Superior bonding strength with PF Resin",
        "No core gaps for perfect screw holding",
        "Ideal for luxury furniture and interiors",
        "ISI certified quality assurance"
      ]}
      pdfLink="https://aangangroup.in/images/categories/aangan-plywood.pdf"
      color="plywood"
      options={plywoodOptions}
      heroImage="https://images.unsplash.com/photo-1541014169601-e6e737cbe113?w=1600&q=80"
    />
  );
}

export default AanganPlywood;
