import ProductPage from '../products/ProductPage';

function Louvers() {
  return (
    <ProductPage
      title="Louvers"
      description="Modern louver designs for ventilation and aesthetic appeal"
      image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
      features={[
        'Modern louver designs',
        'Excellent ventilation',
        'Durable materials',
        'Various sizes available',
        'Easy installation',
        'Perfect for facades and interiors',
      ]}
      color="primary"
    />
  );
}

export default Louvers;
