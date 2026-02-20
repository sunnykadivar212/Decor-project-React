import ProductPage from './ProductPage';

function AFab() {
  const afabOptions = [
    {
      name: "Acoustic Wall Panels",
      description: "Sound-dampening textiles with luxury finishes",
      image: "https://images.unsplash.com/photo-1513519247341-33ae85703f84?w=800&q=80"
    },
    {
      name: "Suede Wall Wraps",
      description: "Velvety soft textures for elite interiors",
      image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=800&q=80"
    },
    {
      name: "Hand-Woven Textures",
      description: "Organic fiber weaves for natural warmth",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80"
    },
    {
      name: "Embossed Fabric Strips",
      description: "Artistic 3D patterns on premium textile bases",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="A-Fab Specialty Materials"
      description="The intersection of textile art and architecture. Our AFab collection offers exclusive fabric-based materials that provide acoustic benefits and unparalleled tactile luxury."
      image="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=1200&q=80"
      features={[
        'Premium textile-to-panel integration',
        'Certified acoustic dampening properties',
        'Stain-resistant and flame-retardant fabrics',
        'Soft-touch tactile experience',
        'Hand-woven and artisanal textures',
        'Seamless installation for luxury feature walls',
      ]}
      pdfLink="https://aangangroup.in/images/categories/a-fab.pdf"
      color="primary"
      options={afabOptions}
      heroImage="https://images.unsplash.com/photo-1521405919366-6da67685934a?w=1600&q=80"
    />
  );
}

export default AFab;
