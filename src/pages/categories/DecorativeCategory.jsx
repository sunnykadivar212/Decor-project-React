import ProductPage from "../products/ProductPage";

function DecorativeCategory() {
  return (
    <ProductPage
      title="Decorative Items"
      description="Unique decorative pieces to enhance your interior aesthetics"
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285377/1000093026_cotenl.jpg"
      features={[
        "Handcrafted decorative items",
        "Contemporary designs",
        "Premium materials",
        "Unique artistic pieces",
        "Perfect for gifting",
        "Customization available"
      ]}
      color="secondary"
    />
  );
}

export default DecorativeCategory;
