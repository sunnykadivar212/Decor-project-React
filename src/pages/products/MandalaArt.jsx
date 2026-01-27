import ProductPage from './ProductPage';

function MandalaArt() {
  return (
    <ProductPage
      title="Mandala Art"
      description="Intricate handcrafted mandala designs for spiritual and aesthetic appeal"
      image="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80"
      features={[
        'Handcrafted mandala designs',
        'Spiritual significance',
        'Unique patterns',
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
