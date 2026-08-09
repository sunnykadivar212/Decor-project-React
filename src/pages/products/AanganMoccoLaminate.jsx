import ProductPage from "./ProductPage";

function AanganMoccoLaminate() {
  const moccoOptions = [
    {
      name: "Stone Texture",
      description: "Organic feel with natural pits and mineral patterns",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786286565/DG-14_devfn3.jpg"
    },
    {
      name: "Natural Wood Grain",
      description: "Hyper-realistic timber patterns with deep grooves",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786286564/DG-12_kpg8on.jpg"
    },
    {
      name: "Fabric Elements",
      description: "Soft textile-inspired surfaces for cozy interiors",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786289539/A-fab_qh2tkp.jpg"
    }
    //{
    //  name: "Industrial Slate",
    //  description: "Dark, moody charcoal texture with slate finish",
    //  image:
    //    "https://images.unsplash.com/photo-1591210956975-a38ef71ade02?w=800&q=80"
    //}
  ];

  return (
    <ProductPage
      title="Aangan Mocco Laminate"
      description="Where texture defines character. The Mocco collection features advanced embossed levels that replicate stone, fabric, and exotic woods with stunning realism."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786286573/DG-08_nqur4o.jpg"
      features={[
        "Deep synchronized textures",
        "Highly realistic natural visuals",
        "Advanced fingerprint resistance",
        "Antibacterial surface protection",
        "Heavy-duty wear resistance",
        "Premium decorative aesthetics"
      ]}
      pdfLink="https://aangangroup.in/images/categories/aangan-mocco-laminate.pdf"
      color="laminate"
      options={moccoOptions}
      heroImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
    />
  );
}

export default AanganMoccoLaminate;
