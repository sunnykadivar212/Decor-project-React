import ProductPage from "./ProductPage";

function Clocks() {
  const clockOptions = [
    {
      name: "Minimalist Wooden",
      description: "Silent sweep movement with natural oak finish",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295368/images_5_x5688u.jpg"
    },
    {
      name: "Vintage Industrial",
      description: "Bold metal gears and Roman numerals",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295370/images_4_bjyanb.jpg"
    },
    {
      name: "Modern Pendulum",
      description: "Architectural design with a rhythmic heartbeat",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295363/images_7_flklva.jpg"
    },
    {
      name: "Art Deco Glass",
      description: "Sleek mirrored surfaces with gold highlights",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295365/images_6_kgdvmk.jpg"
    }
  ];

  return (
    <ProductPage
      title="Wall Clocks"
      description="More than just timekeepers. Our curated collection of wall clocks combines precision engineering with artisanal design to create functional art for your walls."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295361/images_8_td5bnk.jpg"
      features={[
        "Silent sweep quartz movement (No Ticking)",
        "Handcrafted from wood, metal, and glass",
        "Built with high-precision timekeeping technology",
        "Unique artistic and minimal designs",
        "Easy to hang mounting hardware included",
        "Statement pieces for any room size"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={clockOptions}
      heroImage="https://images.unsplash.com/photo-1508057198441-2a143d99616e?w=1600&q=80"
    />
  );
}

export default Clocks;
