import ProductPage from "./ProductPage";

function CenterTables() {
  const tableOptions = [
    {
      name: "Double Nesting Tables",
      description: "Flexible design with space-saving capabilities",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295193/325479c67ae420717920adc9b7c7d857_rl4dos.jpg0"
    },
    {
      name: "Art Deco Glass",
      description: "Elegant geometric patterns with gold accents",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295190/zivo-rectangular-center-tablecoffee-tabl-glass-top-not-included-813575_lpefal.jpg"
    },
    {
      name: "Rustic Live Edge",
      description: "Unique natural wood slab with organic edges",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295192/1-23_gmhnnx.jpg"
    },
    {
      name: "Marble Monolith",
      description: "Solid block marble for a powerful presence",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295189/1734694131RsrN2KJh_kfs4he.jpg"
    }
  ];

  return (
    <ProductPage
      title="Center Tables"
      description="The soul of your seating area. Our center tables are designed to complement your lifestyle while adding a layer of sophistication to your living room."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295196/bf111692bea12bca1e24d11699f91272_idn7yf.jpg"
      features={[
        "Unique centerpiece designs",
        "High-quality glass, marble, and wood",
        "Child-safe rounded edge options",
        "Built-in storage compartments available",
        "Artistic and functional silhouettes",
        "Durable and easy-to-clean surfaces"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={tableOptions}
      heroImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
    />
  );
}

export default CenterTables;
