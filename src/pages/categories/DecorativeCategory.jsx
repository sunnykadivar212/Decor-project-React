import ProductPage from '../products/ProductPage';

function DecorativeCategory() {
  return (
    <ProductPage
      title="Decorative Items"
      description="Unique decorative pieces to enhance your interior aesthetics"
      image="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80"
      features={[
        'Handcrafted decorative items',
        'Contemporary designs',
        'Premium materials',
        'Unique artistic pieces',
        'Perfect for gifting',
        'Customization available',
      ]}
      color="secondary"
    />
  );
}

export default DecorativeCategory;
