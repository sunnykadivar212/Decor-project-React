import ProductPage from './ProductPage';

function FalseCeiling() {
  const ceilingOptions = [
    {
      name: "Custom POP Ceiling Design",
      description: "Sophisticated suspended plaster designs with custom lighting coves",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80"
    },
    {
      name: "Metallic ACP Facade Cladding",
      description: "Sleek, lightweight, and weather-proof exterior cladding for buildings",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80"
    },
    {
      name: "Architectural LED Cove Ceiling",
      description: "Seamless linear LED channel integrations for modern ambient lighting",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
    },
    {
      name: "Minimalist Floating Ceiling",
      description: "Clean gypsum board layouts that make spaces feel larger and open",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="False Ceiling & ACP"
      description="Transform your space with elegant POP designs and weather-resistant ACP sheets. ACP (Aluminium Composite Panel) sheets are lightweight, durable cladding materials, perfect for building facades. POP (Plaster of Paris) ceilings blend modern trends with timeless charm to add depth, style, and character to any interior."
      image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
      features={[
        'ACP (Aluminium Composite Panel) sheets are lightweight, durable, and highly weather-resistant',
        'Impeccable POP plaster designs custom-tailored on-site by skilled artisans',
        'Provides thermal and acoustic insulation properties for energy savings and comfort',
        'Hides structural electrical wiring, ductwork, and pipes seamlessly',
        'Pre-designed for integrated ambient cove LED lighting and spotlights',
        'Enhances visual depth, scaling, and character of living rooms, bedrooms, and offices',
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="plywood"
      options={ceilingOptions}
      heroImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&q=80"
    />
  );
}

export default FalseCeiling;
