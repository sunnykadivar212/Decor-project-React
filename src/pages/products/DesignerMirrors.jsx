import ProductPage from './ProductPage';

function DesignerMirrors() {
  return (
    <ProductPage
      title="Designer Mirrors"
      description="Designer mirrors are stylish, decorative mirrors that enhance both function and aesthetics in any space. With artistic frames, unique shapes and elegant finishes."
      image="https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80"
      features={[
        'Stylish and decorative designs',
        'Enhances function and aesthetics',
        'Artistic frames and unique shapes',
        'Elegant finishes and premium quality',
        'Perfect for living rooms, bedrooms, and bathrooms',
        'Creates illusion of space',
        'Statement pieces for any interior',
        'Various sizes and styles available'
      ]}
      color="gold"
    />
  );
}

export default DesignerMirrors;
