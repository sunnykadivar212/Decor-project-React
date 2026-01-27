import ProductPage from '../products/ProductPage';

function Laminate() {
  return (
    <ProductPage
      title="Laminates"
      description="Complete range of decorative laminates for all applications"
      image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
      features={[
        'Plain and textured laminates',
        'Mocco finish options',
        'Scratch and heat resistant',
        'Wide color range',
        'Easy to maintain',
        'Suitable for furniture and walls',
      ]}
      color="primary"
    />
  );
}

export default Laminate;
