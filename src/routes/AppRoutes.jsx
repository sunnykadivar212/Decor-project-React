import { Routes, Route } from 'react-router-dom';

// Main Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Shop from '../pages/Shop';
import Interior from '../pages/Interior';
import Decorative from '../pages/Decorative';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

// Content Pages
import FAQ from '../pages/FAQ';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

// Individual Product Pages
import AanganPlywood from '../pages/products/AanganPlywood';
import AanganPlainLaminate from '../pages/products/AanganPlainLaminate';
import AanganMoccoLaminate from '../pages/products/AanganMoccoLaminate';
import AFab from '../pages/products/AFab';
import AanganAcrylic from '../pages/products/AanganAcrylic';
import Plants from '../pages/products/Plants';
import AanganDecorative from '../pages/products/AanganDecorative';
import MandalaArt from '../pages/products/MandalaArt';
import AanganVol1 from '../pages/products/AanganVol1';
import AanganVol2 from '../pages/products/AanganVol2';
import AanganVol3 from '../pages/products/AanganVol3';
import AanganVol4 from '../pages/products/AanganVol4';

// Category Pages
import Laminate from '../pages/categories/Laminate';
import Louvers from '../pages/categories/Louvers';
import DecorativeCategory from '../pages/categories/DecorativeCategory';
import PlywoodCategory from '../pages/categories/PlywoodCategory';

function AppRoutes() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services-detail" element={<Services />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/interior" element={<Interior />} />
      <Route path="/decorative" element={<Decorative />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact-us" element={<Contact />} />

      {/* Content Pages */}
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-conditions" element={<Terms />} />

      {/* Individual Product Pages */}
      <Route path="/aangan-plywood" element={<AanganPlywood />} />
      <Route path="/aangan-plain-laminate" element={<AanganPlainLaminate />} />
      <Route path="/aangan-mocco-laminate" element={<AanganMoccoLaminate />} />
      <Route path="/a-fab" element={<AFab />} />
      <Route path="/aangan-acrylic" element={<AanganAcrylic />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/aangan-decorative" element={<AanganDecorative />} />
      <Route path="/mandala-art" element={<MandalaArt />} />
      <Route path="/aangan-vol-1" element={<AanganVol1 />} />
      <Route path="/aangan-vol-2" element={<AanganVol2 />} />
      <Route path="/aangan-vol-3" element={<AanganVol3 />} />
      <Route path="/aangan-vol-4" element={<AanganVol4 />} />

      {/* Category Pages */}
      <Route path="/laminate" element={<Laminate />} />
      <Route path="/louvers" element={<Louvers />} />
      <Route path="/decorative" element={<DecorativeCategory />} />
      <Route path="/plywood" element={<PlywoodCategory />} />

      {/* 404 Not Found - Must be last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
