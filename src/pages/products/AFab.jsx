import ProductPage from './ProductPage';

function AFab() {
  return (
    <ProductPage
      title="A-Fab Materials"
      description="Premium fabric-based decorative materials for modern interiors"
      image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
      features={[
        'Fabric-based premium materials',
        'Soft touch finish',
        'Acoustic properties',
        'Elegant appearance',
        'Easy installation',
        'Customizable options',
      ]}
      pdfLink="https://aangangroup.in/images/categories/a-fab.pdf"
      color="primary"
    />
  );
}

export default AFab;
