import ProductPage from "../products/ProductPage";

function Laminate() {
  return (
    <ProductPage
      title="Laminates"
      description="Complete range of decorative laminates for all applications"
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786286554/ZC-05_bdcsvk.jpg"
      features={[
        "Plain and textured laminates",
        "Mocco finish options",
        "Scratch and heat resistant",
        "Wide color range",
        "Easy to maintain",
        "Suitable for furniture and walls"
      ]}
      color="primary"
    />
  );
}

export default Laminate;
