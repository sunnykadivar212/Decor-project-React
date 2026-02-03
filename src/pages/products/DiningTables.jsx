import ProductPage from './ProductPage';

function DiningTables() {
  return (
    <ProductPage
      title="Dining Tables"
      description="A dining table is a central piece of furniture designed for shared meals and gatherings. Available in various styles, sizes, and materials."
      image="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80"
      features={[
        'Central piece for shared meals',
        'Perfect for family gatherings',
        'Various styles and sizes',
        'Premium wood and materials',
        'Durable construction',
        'Seats 4 to 12+ people',
        'Modern, rustic, and classic designs',
        'Easy to maintain and clean'
      ]}
      color="gold"
    />
  );
}

export default DiningTables;
