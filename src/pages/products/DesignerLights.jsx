import ProductPage from './ProductPage';

function DesignerLights() {
  const lightOptions = [
    {
      name: "Crystal Chandelier",
      description: "Regal lighting for grand dining and entryways",
      image: "https://images.unsplash.com/photo-1542611846112-9c9c84918e9c?w=800&q=80"
    },
    {
      name: "Modern Pendant",
      description: "Sleek, focused lighting for kitchens and bars",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80"
    },
    {
      name: "Architectural Floor Lamp",
      description: "Statement piece for reading and ambient corners",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80"
    },
    {
      name: "Designer Wall Scones",
      description: "Elegant accent lighting for hallways and bedsides",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed657f9971?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Designer Lights"
      description="Illuminating excellence. Our designer lighting fixtures are engineered to cast the perfect glow while serving as stunning sculptural elements in your home."
      image="https://images.unsplash.com/photo-1542611846112-9c9c84918e9c?w=1200&q=80"
      features={[
        'High-efficiency LED integration',
        'Premium brass, chrome, and crystal finishes',
        'Adjustable brightness and color temperature',
        'Architectural-grade wiring and safety',
        'Unique artisanal glass blowing',
        'Available in a wide range of styles',
      ]}
      pdfLink="/catalogs/lights.pdf"
      color="decorative"
      options={lightOptions}
      heroImage="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1600&q=80"
    />
  );
}

export default DesignerLights;
