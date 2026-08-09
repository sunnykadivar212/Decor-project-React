import ProductPage from "./ProductPage";

function FalseCeiling() {
  const ceilingOptions = [
    {
      name: "Custom POP Ceiling Design",
      description:
        "Sophisticated suspended plaster designs with custom lighting coves",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786297505/images_41_uywo9g.jpg"
    },
    {
      name: "Metallic ACP Facade Cladding",
      description:
        "Sleek, lightweight, and weather-proof exterior cladding for buildings",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786297497/images_44_mxhoph.jpg"
    },
    {
      name: "Architectural LED Cove Ceiling",
      description:
        "Seamless linear LED channel integrations for modern ambient lighting",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786297495/images_45_ysbolm.jpg"
    },
    {
      name: "Minimalist Floating Ceiling",
      description:
        "Clean gypsum board layouts that make spaces feel larger and open",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786297503/images_42_gmnclt.jpg"
    }
  ];

  return (
    <ProductPage
      title="False Ceiling & ACP"
      description="Transform your space with elegant POP designs and weather-resistant ACP sheets. ACP (Aluminium Composite Panel) sheets are lightweight, durable cladding materials, perfect for building facades. POP (Plaster of Paris) ceilings blend modern trends with timeless charm to add depth, style, and character to any interior."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786297500/images_43_zw8t4m.jpg"
      features={[
        "ACP (Aluminium Composite Panel) sheets are lightweight, durable, and highly weather-resistant",
        "Impeccable POP plaster designs custom-tailored on-site by skilled artisans",
        "Provides thermal and acoustic insulation properties for energy savings and comfort",
        "Hides structural electrical wiring, ductwork, and pipes seamlessly",
        "Pre-designed for integrated ambient cove LED lighting and spotlights",
        "Enhances visual depth, scaling, and character of living rooms, bedrooms, and offices"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="plywood"
      options={ceilingOptions}
      heroImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&q=80"
    />
  );
}

export default FalseCeiling;
