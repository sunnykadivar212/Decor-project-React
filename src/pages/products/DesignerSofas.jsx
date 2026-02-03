import ProductPage from './ProductPage';

function DesignerSofas() {
  return (
    <ProductPage
      title="Designer Sofas"
      description="Designer sofas are stylish, high-quality seating pieces that combine comfort with contemporary or classic aesthetics."
      image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
      features={[
        'Stylish, high-quality seating',
        'Combines comfort with aesthetics',
        'Contemporary and classic designs',
        'Premium upholstery materials',
        'Durable construction',
        'Various sizes and configurations',
        'Customizable fabric and color options',
        'Perfect for living rooms and lounges'
      ]}
      color="primary"
    />
  );
}

export default DesignerSofas;
