import ProductPage from './ProductPage';

function Artifacts() {
  return (
    <ProductPage
      title="Artifacts & Showpieces"
      description="Customised showpieces are personalized decorative items designed to reflect individual style, themes or messages. Ideal for gifting or enhancing interior spaces."
      image="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
      features={[
        'Personalized decorative items',
        'Reflects individual style and themes',
        'Perfect for gifting occasions',
        'Enhances interior aesthetics',
        'Customizable designs and messages',
        'Premium quality craftsmanship',
        'Unique conversation pieces',
        'Wide range of styles and materials'
      ]}
      color="primary"
    />
  );
}

export default Artifacts;
