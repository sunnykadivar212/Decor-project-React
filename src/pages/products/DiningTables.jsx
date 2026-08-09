import ProductPage from "./ProductPage";

function DiningTables() {
  const tableOptions = [
    {
      name: "Italian Marble Top",
      description: "Luxurious natural stone with unique veining",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296860/images_39_pvxllu.jpg"
    },
    {
      name: "Solid Oak Wood",
      description: "Rustic warmth with generational durability",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296862/images_38_mczowd.jpg"
    },
    {
      name: "Tempered Glass Modern",
      description: "Sleek and airy design for open spaces",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296857/images_40_muj4ot.jpg"
    },
    {
      name: "Industrial Metal Base",
      description: "Bold architectural presence for urban lofts",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296868/images_36_gptodg.jpg"
    }
  ];

  return (
    <ProductPage
      title="Dining Tables"
      description="Gather around perfection. Our dining tables are masterpieces of design, crafted from the finest materials to host your most memorable moments."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786296865/images_37_lttvoa.jpg"
      features={[
        "Premium Italian marble and solid wood tops",
        "Anti-scratch and heat-resistant finishes",
        "Engineered for maximum stability",
        "Available in all standard and custom sizes",
        "Architectural leg designs",
        "Easy to clean and maintain"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={tableOptions}
      heroImage="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1600&q=80"
    />
  );
}

export default DiningTables;
