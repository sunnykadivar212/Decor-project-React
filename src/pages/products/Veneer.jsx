import ProductPage from "./ProductPage";

function Veneer() {
  const veneerOptions = [
    {
      name: "Natural Teak Veneer",
      description: "Warm golden-brown hues with classic straight grain lines",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786298833/images_55_ptuktl.jpg"
    },
    {
      name: "Dark Smoked Oak",
      description: "Deep, chocolatey tones with elegant architectural texture",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786298826/images_57_u3v7oy.jpg"
    },
    {
      name: "European Walnut",
      description: "Rich wavy grain patterns for high-end luxury furniture",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786298830/images_56_blqkx5.jpg"
    },
    {
      name: "Exotic Smoked Ash",
      description: "Sophisticated grey-black palette with vibrant figure lines",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786298822/images_58_ej0cxp.jpg"
    }
  ];

  return (
    <ProductPage
      title="Aangan Veneers"
      description="Veneer is a thin layer of natural wood applied to surfaces to give furniture and interiors a premium, elegant wooden finish while maintaining cost-effectiveness and durability."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786298835/images_54_lq8yjj.jpg"
      features={[
        "100% natural wood decorative surface",
        "Rich, unique grain patterns sourced from premium timbers",
        "Eco-friendly and highly sustainable wood panels",
        "Premium resistance to cracking, warping, and splitting",
        "Adds luxury, depth, and warmth to any residential or commercial interior",
        "Excellent response to wood polishing and staining finishes"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="plywood"
      options={veneerOptions}
      heroImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
    />
  );
}

export default Veneer;
