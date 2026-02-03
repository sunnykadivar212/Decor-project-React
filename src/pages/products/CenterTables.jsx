import ProductPage from './ProductPage';

function CenterTables() {
  return (
    <ProductPage
      title="Center Tables"
      description="A central table, also known as a center or coffee table, is a versatile furniture piece placed at the heart of a seating area."
      image="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=80"
      features={[
        'Versatile furniture piece',
        'Perfect for living room seating areas',
        'Functional and decorative',
        'Various styles and materials',
        'Storage options available',
        'Glass, wood, and metal designs',
        'Modern and traditional styles',
        'Easy to maintain'
      ]}
      color="primary"
    />
  );
}

export default CenterTables;
