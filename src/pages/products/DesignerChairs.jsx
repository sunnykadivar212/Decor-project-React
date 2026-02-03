import ProductPage from './ProductPage';

function DesignerChairs() {
  return (
    <ProductPage
      title="Designer Chairs"
      description="Designer chairs are stylish seating solutions that blend comfort with artistic design. Crafted with premium materials and unique aesthetics."
      image="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80"
      features={[
        'Stylish seating solutions',
        'Blends comfort with artistic design',
        'Premium materials and craftsmanship',
        'Unique aesthetic appeal',
        'Ergonomic designs',
        'Various styles: modern, classic, contemporary',
        'Perfect for dining, office, or accent seating',
        'Durable and long-lasting'
      ]}
      color="primary"
    />
  );
}

export default DesignerChairs;
