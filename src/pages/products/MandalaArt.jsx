import ProductPage from './ProductPage';

function MandalaArt() {
  return (
    <ProductPage
      title="Mandala Art"
      description="Mandala art is a spiritual and geometric design form that symbolizes unity, balance and harmony. Featuring intricate patterns and symmetrical shapes."
      image="https://images.unsplash.com/photo-1582201957340-a0c6feb8d203?w=800&q=80"
      features={[
        'Spiritual and geometric design form',
        'Symbolizes unity, balance, and harmony',
        'Intricate patterns and symmetrical shapes',
        'Various sizes available',
        'Perfect for meditation spaces',
        'Custom designs on request',
      ]}
      pdfLink="https://aangangroup.in/images/categories/mandla-art.pdf"
      color="secondary"
    />
  );
}

export default MandalaArt;
