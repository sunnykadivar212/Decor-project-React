import ProductPage from "./ProductPage";

function Curtains() {
  const curtainOptions = [
    {
      name: "Sheer Voile",
      description: "Ethereal transparency for soft light diffusion",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295611/images_9_bhx5v0.jpg"
    },
    {
      name: "Total Blackout",
      description: "Heavy-duty thermal lining for perfect sleep",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295604/images_12_zvyvh7.jpg"
    },
    {
      name: "Royal Velvet",
      description: "Rich, weighted fabric for a dramatic drape",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295608/images_10_vjjcbx.jpg"
    },
    {
      name: "Natural Linen",
      description: "Organic texture for a relaxed, airy feel",
      image:
        "https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295602/images_13_z4zcb3.jpg"
    }
  ];

  return (
    <ProductPage
      title="Designer Curtains"
      description="Frame your view with elegance. Our custom curtains are made from the world's finest textiles, offering both functional light control and unparalleled aesthetic appeal."
      image="https://res.cloudinary.com/dbuoua4q1/image/upload/v1786295606/images_11_c7dpmq.jpg"
      features={[
        "Custom-made to your exact measurements",
        "Premium blackout and sheer fabric options",
        "Advanced UV protection and insulation",
        "Weighted hems for perfect professional draping",
        "Available in motorized and manual tracks",
        "Vast library of patterns and solid colors"
      ]}
      pdfLink="/catalogs/Aangan_Group_Company_Profile.pdf"
      color="decorative"
      options={curtainOptions}
      heroImage="https://images.unsplash.com/photo-1513519247341-33ae85703f84?w=1600&q=80"
    />
  );
}

export default Curtains;
