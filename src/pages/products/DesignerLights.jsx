import ProductPage from './ProductPage';

function DesignerLights() {
  return (
    <ProductPage
      title="Designer Lights"
      description="Designer lights are stylish lighting fixtures that blend functionality with artistic design. Available in modern, classic or contemporary styles."
      image="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80"
      features={[
        'Stylish lighting fixtures',
        'Blends functionality with artistic design',
        'Modern, classic, and contemporary styles',
        'Premium quality materials',
        'Energy-efficient options available',
        'Perfect ambient and task lighting',
        'Transforms the mood of any space',
        'Easy installation and maintenance'
      ]}
      color="primary"
    />
  );
}

export default DesignerLights;
