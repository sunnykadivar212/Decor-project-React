import ProductPage from "./ProductPage";

function AanganPlainLaminate() {
  const laminateOptions = [
    {
      name: "Matte Finish",
      description: "Soft touch, non-reflective surface for elegant results",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786293528/4409_bwmn3v.jpg"
    },
    {
      name: "High Gloss",
      description: "Mirror-like shine for a luxurious, modern look",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786286573/DG-08_nqur4o.jpg"
    },
    {
      name: "Suede Finish",
      description: "Micro-texture that feels like premium fabric",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285172/Laminate-9_uocrrw.jpg"
    },
    {
      name: "Deep Texture",
      description: "Dramatic industrial and natural textures",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786286573/DG-9_sc2aye.jpg"
    }
  ];

  return (
    <ProductPage
      title="Aangan Plain Laminate"
      description="Refined simplicity meets durability. Our plain laminates offer a curated palette of solid colors with multiple finishing options for contemporary interiors."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786286545/2011_12x24_kxtljl.jpg"
      features={[
        "Vivid solid color collection",
        "Scratch, stain and impact resistant",
        "Easy to clean and maintain",
        "Anti-yellowing technology",
        "Perfect for residential and commercial use",
        "Available in multiple tactile finishes"
      ]}
      pdfLink="https://aangangroup.in/images/categories/aangan-plain-laminate.pdf"
      color="laminate"
      options={laminateOptions}
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
    />
  );
}

export default AanganPlainLaminate;
