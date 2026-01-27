import ProductPage from './ProductPage';

function Plants() {
  return (
    <ProductPage
      title="Indoor Plants"
      description="Beautiful indoor plants to bring life and freshness to your space"
      image="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&q=80"
      features={[
        'Air purifying plants',
        'Low maintenance varieties',
        'Decorative planters included',
        'Expert care guidance',
        'Suitable for all spaces',
        'Fresh and healthy plants',
      ]}
      pdfLink="https://aangangroup.in/images/categories/plants.pdf"
      color="secondary"
    />
  );
}

export default Plants;
