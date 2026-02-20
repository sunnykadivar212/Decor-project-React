import ProductPage from './ProductPage';

function Curtains() {
  const curtainOptions = [
    {
      name: "Sheer Voile",
      description: "Ethereal transparency for soft light diffusion",
      image: "https://images.unsplash.com/photo-1513519247341-33ae85703f84?w=800&q=80"
    },
    {
      name: "Total Blackout",
      description: "Heavy-duty thermal lining for perfect sleep",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    },
    {
      name: "Royal Velvet",
      description: "Rich, weighted fabric for a dramatic drape",
      image: "https://images.unsplash.com/photo-1567016432779-094069958bc5?w=800&q=80"
    },
    {
      name: "Natural Linen",
      description: "Organic texture for a relaxed, airy feel",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Designer Curtains"
      description="Frame your view with elegance. Our custom curtains are made from the world's finest textiles, offering both functional light control and unparalleled aesthetic appeal."
      image="https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?w=1200&q=80"
      features={[
        'Custom-made to your exact measurements',
        'Premium blackout and sheer fabric options',
        'Advanced UV protection and insulation',
        'Weighted hems for perfect professional draping',
        'Available in motorized and manual tracks',
        'Vast library of patterns and solid colors',
      ]}
      pdfLink="/catalogs/curtains.pdf"
      color="decorative"
      options={curtainOptions}
      heroImage="https://images.unsplash.com/photo-1513519247341-33ae85703f84?w=1600&q=80"
    />
  );
}

export default Curtains;
