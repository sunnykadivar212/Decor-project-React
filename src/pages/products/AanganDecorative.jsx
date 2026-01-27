import ProductPage from './ProductPage';

function AanganDecorative() {
  return (
    <ProductPage
      title="Aangan Decorative"
      description="Unique decorative pieces to enhance your interior aesthetics"
      image="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80"
      features={[
        'Handcrafted decorative items',
        'Contemporary designs',
        'Premium quality materials',
        'Unique artistic pieces',
        'Perfect for gifting',
        'Customization available',
      ]}
      pdfLink="https://aangangroup.in/images/categories/aangan-decorative.pdf"
      color="secondary"
    />
  );
}

export default AanganDecorative;
