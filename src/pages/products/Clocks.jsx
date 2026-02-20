import ProductPage from './ProductPage';

function Clocks() {
  const clockOptions = [
    {
      name: "Minimalist Wooden",
      description: "Silent sweep movement with natural oak finish",
      image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&q=80"
    },
    {
      name: "Vintage Industrial",
      description: "Bold metal gears and Roman numerals",
      image: "https://images.unsplash.com/photo-1508057198441-2a143d99616e?w=800&q=80"
    },
    {
      name: "Modern Pendulum",
      description: "Architectural design with a rhythmic heartbeat",
      image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&q=80"
    },
    {
      name: "Art Deco Glass",
      description: "Sleek mirrored surfaces with gold highlights",
      image: "https://images.unsplash.com/photo-1461696114087-397271a7aedc?w=800&q=80"
    }
  ];

  return (
    <ProductPage
      title="Wall Clocks"
      description="More than just timekeepers. Our curated collection of wall clocks combines precision engineering with artisanal design to create functional art for your walls."
      image="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=1200&q=80"
      features={[
        'Silent sweep quartz movement (No Ticking)',
        'Handcrafted from wood, metal, and glass',
        'Built with high-precision timekeeping technology',
        'Unique artistic and minimal designs',
        'Easy to hang mounting hardware included',
        'Statement pieces for any room size',
      ]}
      pdfLink="/catalogs/clocks.pdf"
      color="decorative"
      options={clockOptions}
      heroImage="https://images.unsplash.com/photo-1508057198441-2a143d99616e?w=1600&q=80"
    />
  );
}

export default Clocks;
