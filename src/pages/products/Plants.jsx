import ProductPage from "./ProductPage";

function Plants() {
  const plantOptions = [
    {
      name: "Monstera Deliciosa",
      description: "Iconic swiss-cheese plant for a tropical feel",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285465/1000093069_ontsjb.jpg"
    },
    {
      name: "Fiddle Leaf Fig",
      description: "Elegant large leaves for a dramatic statement",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285459/1000093064_tri1h0.jpg"
    },
    {
      name: "Sansevieria Snake",
      description: "Low-maintenance architectural greenery",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285456/1000093063_fioqqx.jpg"
    },
    {
      name: "Zen Bonsai",
      description: "Meticulously pruned miniature tree for focused peace",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285446/1000093058_pth7xz.jpg"
    }
  ];

  return (
    <ProductPage
      title="Indoor Plants"
      description="Breathe life into your home. Our collection of premium indoor plants and exotic greenery is curated to improve air quality and add a refreshing natural touch to your decor."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285465/1000093071_vamppm.jpg"
      features={[
        "Healthy and well-established plants",
        "Natural air purification properties",
        "Low-maintenance and hardy varieties",
        "Includes premium ceramic or terracotta pots",
        "Expert plant care guides provided",
        "Various sizes from tabletop to floor-standing"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={plantOptions}
      heroImage="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=1600&q=80"
    />
  );
}

export default Plants;
