import ProductPage from "../products/ProductPage";

function PlywoodCategory() {
  return (
    <ProductPage
      title="Plywood"
      description="Premium quality plywood for all construction and interior needs"
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285322/IMG_1506_uojhq9.jpg"
      features={[
        "BWP and BWR grade plywood",
        "Termite resistant",
        "High bonding strength",
        "Various thicknesses",
        "ISI certified",
        "Ideal for furniture and construction"
      ]}
      color="primary"
    />
  );
}

export default PlywoodCategory;
