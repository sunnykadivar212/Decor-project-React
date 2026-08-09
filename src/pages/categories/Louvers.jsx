import ProductPage from "../products/ProductPage";

function Louvers() {
  return (
    <ProductPage
      title="Louvers"
      description="Modern louver designs for ventilation and aesthetic appeal"
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786285204/IMG_1414_gu6p0m.jpg"
      features={[
        "Modern louver designs",
        "Excellent ventilation",
        "Durable materials",
        "Various sizes available",
        "Easy installation",
        "Perfect for facades and interiors"
      ]}
      color="primary"
    />
  );
}

export default Louvers;
