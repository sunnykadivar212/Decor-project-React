import ProductPage from './ProductPage';

function Curtains() {
  return (
    <ProductPage
      title="Curtains"
      description="Curtains are decorative and functional fabric panels used to enhance privacy, control light and add style to any space."
      image="https://images.unsplash.com/photo-1585128792304-b8f4b7c2f8d5?w=800&q=80"
      features={[
        'Decorative and functional fabric panels',
        'Enhances privacy and light control',
        'Adds style to any space',
        'Wide range of fabrics and patterns',
        'Custom sizing available',
        'Blackout and sheer options',
        'Easy installation and maintenance',
        'Perfect for homes and offices'
      ]}
      color="gold"
    />
  );
}

export default Curtains;
