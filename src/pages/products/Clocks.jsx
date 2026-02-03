import ProductPage from './ProductPage';

function Clocks() {
  return (
    <ProductPage
      title="Clocks"
      description="Functional and decorative timepieces that add style and structure to any space. Available in various designs - from classic to modern."
      image="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&q=80"
      features={[
        'Wide variety of designs from classic to contemporary',
        'Functional timepieces with decorative appeal',
        'Premium quality materials and mechanisms',
        'Perfect for homes, offices, and commercial spaces',
        'Adds style and structure to any room',
        'Available in various sizes and finishes',
        'Silent or ticking options available',
        'Easy installation and maintenance'
      ]}
      color="gold"
    />
  );
}

export default Clocks;
