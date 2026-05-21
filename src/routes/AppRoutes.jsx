import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// ── EAGER: Main & Home (critical path)
import Home from '../pages/Home';

// ── LAZY: All other pages (loaded on demand)
const About           = lazy(() => import('../pages/About'));
const Services        = lazy(() => import('../pages/Services'));
const TurnkeyProjects = lazy(() => import('../pages/TurnkeyProjects'));
const Interior        = lazy(() => import('../pages/Interior'));
const Decorative      = lazy(() => import('../pages/Decorative'));
const Contact         = lazy(() => import('../pages/Contact'));
const NotFound        = lazy(() => import('../pages/NotFound'));
const FAQ             = lazy(() => import('../pages/FAQ'));
const Privacy         = lazy(() => import('../pages/Privacy'));
const Terms           = lazy(() => import('../pages/Terms'));

// Category Pages
const Laminate           = lazy(() => import('../pages/categories/Laminate'));
const Louvers            = lazy(() => import('../pages/categories/Louvers'));
const DecorativeCategory = lazy(() => import('../pages/categories/DecorativeCategory'));
const PlywoodCategory    = lazy(() => import('../pages/categories/PlywoodCategory'));
const Hardware           = lazy(() => import('../pages/categories/Hardware'));

// Interior Product Pages
const AanganPlywood       = lazy(() => import('../pages/products/AanganPlywood'));
const AanganPlainLaminate = lazy(() => import('../pages/products/AanganPlainLaminate'));
const AanganMoccoLaminate = lazy(() => import('../pages/products/AanganMoccoLaminate'));
const AFab                = lazy(() => import('../pages/products/AFab'));
const AanganAcrylic       = lazy(() => import('../pages/products/AanganAcrylic'));
const Veneer              = lazy(() => import('../pages/products/Veneer'));
const PUWallPanel         = lazy(() => import('../pages/products/PUWallPanel'));
const MouldingPatti       = lazy(() => import('../pages/products/MouldingPatti'));
const FalseCeiling        = lazy(() => import('../pages/products/FalseCeiling'));

// Decorative Product Pages
const Plants          = lazy(() => import('../pages/products/Plants'));
const AanganDecorative = lazy(() => import('../pages/products/AanganDecorative'));
const MandalaArt      = lazy(() => import('../pages/products/MandalaArt'));
const AanganVol1      = lazy(() => import('../pages/products/AanganVol1'));
const AanganVol2      = lazy(() => import('../pages/products/AanganVol2'));
const AanganVol3      = lazy(() => import('../pages/products/AanganVol3'));
const AanganVol4      = lazy(() => import('../pages/products/AanganVol4'));
const Clocks          = lazy(() => import('../pages/products/Clocks'));
const Artifacts       = lazy(() => import('../pages/products/Artifacts'));
const DesignerMirrors = lazy(() => import('../pages/products/DesignerMirrors'));
const DesignerLights  = lazy(() => import('../pages/products/DesignerLights'));
const DesignerSofas   = lazy(() => import('../pages/products/DesignerSofas'));
const Curtains        = lazy(() => import('../pages/products/Curtains'));
const DesignerChairs  = lazy(() => import('../pages/products/DesignerChairs'));
const DiningTables    = lazy(() => import('../pages/products/DiningTables'));
const CenterTables    = lazy(() => import('../pages/products/CenterTables'));

// Minimal page loading fallback
function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      background: 'var(--color-bg-primary)',
    }}>
      <div className="spinner" />
    </div>
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* ── MAIN PAGES ── */}
        <Route path="/"              element={<Home />} />
        <Route path="/about"         element={<About />} />
        <Route path="/about-us"      element={<About />} />
        <Route path="/services"      element={<Services />} />
        <Route path="/services-detail" element={<Services />} />
        <Route path="/turnkey-projects" element={<TurnkeyProjects />} />
        <Route path="/contact"       element={<Contact />} />
        <Route path="/contact-us"    element={<Contact />} />

        {/* ── CATEGORY PAGES ── */}
        <Route path="/interior"      element={<Interior />} />
        <Route path="/decorative"    element={<Decorative />} />

        {/* ── CONTENT PAGES ── */}
        <Route path="/faq"              element={<FAQ />} />
        <Route path="/privacy-policy"   element={<Privacy />} />
        <Route path="/terms-conditions" element={<Terms />} />

        {/* ── NESTED CATEGORY PAGES ── */}
        <Route path="/categories/laminate"    element={<Laminate />} />
        <Route path="/categories/louvers"     element={<Louvers />} />
        <Route path="/categories/decorative"  element={<DecorativeCategory />} />
        <Route path="/categories/plywood"     element={<PlywoodCategory />} />
        <Route path="/categories/hardware"    element={<Hardware />} />

        {/* ── INTERIOR PRODUCT PAGES ── */}
        <Route path="/interior/aangan-plywood"        element={<AanganPlywood />} />
        <Route path="/interior/aangan-plain-laminate" element={<AanganPlainLaminate />} />
        <Route path="/interior/aangan-mocco-laminate" element={<AanganMoccoLaminate />} />
        <Route path="/interior/a-fab"                 element={<AFab />} />
        <Route path="/interior/aangan-acrylic"        element={<AanganAcrylic />} />
        <Route path="/interior/veneer"                element={<Veneer />} />
        <Route path="/interior/pu-wall-panel"         element={<PUWallPanel />} />
        <Route path="/interior/moulding-patti"        element={<MouldingPatti />} />
        <Route path="/interior/false-ceiling"         element={<FalseCeiling />} />

        {/* ── DECORATIVE PRODUCT PAGES ── */}
        <Route path="/decorative/plants"           element={<Plants />} />
        <Route path="/decorative/aangan-decorative" element={<AanganDecorative />} />
        <Route path="/decorative/mandala-art"       element={<MandalaArt />} />
        <Route path="/decorative/aangan-vol-1"      element={<AanganVol1 />} />
        <Route path="/decorative/aangan-vol-2"      element={<AanganVol2 />} />
        <Route path="/decorative/aangan-vol-3"      element={<AanganVol3 />} />
        <Route path="/decorative/aangan-vol-4"      element={<AanganVol4 />} />
        <Route path="/decorative/clocks"            element={<Clocks />} />
        <Route path="/decorative/artifacts"         element={<Artifacts />} />
        <Route path="/decorative/designer-mirrors"  element={<DesignerMirrors />} />
        <Route path="/decorative/designer-lights"   element={<DesignerLights />} />
        <Route path="/decorative/designer-sofas"    element={<DesignerSofas />} />
        <Route path="/decorative/curtains"          element={<Curtains />} />
        <Route path="/decorative/designer-chairs"   element={<DesignerChairs />} />
        <Route path="/decorative/dining-tables"     element={<DiningTables />} />
        <Route path="/decorative/center-tables"     element={<CenterTables />} />

        {/* ── LEGACY ROUTES ── */}
        <Route path="/aangan-plywood"        element={<AanganPlywood />} />
        <Route path="/aangan-plain-laminate" element={<AanganPlainLaminate />} />
        <Route path="/aangan-mocco-laminate" element={<AanganMoccoLaminate />} />
        <Route path="/a-fab"                 element={<AFab />} />
        <Route path="/aangan-acrylic"        element={<AanganAcrylic />} />
        <Route path="/veneer"                element={<Veneer />} />
        <Route path="/pu-wall-panel"         element={<PUWallPanel />} />
        <Route path="/moulding-patti"        element={<MouldingPatti />} />
        <Route path="/false-ceiling"         element={<FalseCeiling />} />
        <Route path="/plants"                element={<Plants />} />
        <Route path="/aangan-decorative"     element={<AanganDecorative />} />
        <Route path="/mandala-art"           element={<MandalaArt />} />
        <Route path="/aangan-vol-1"          element={<AanganVol1 />} />
        <Route path="/aangan-vol-2"          element={<AanganVol2 />} />
        <Route path="/aangan-vol-3"          element={<AanganVol3 />} />
        <Route path="/aangan-vol-4"          element={<AanganVol4 />} />
        <Route path="/clocks"                element={<Clocks />} />
        <Route path="/artifacts"             element={<Artifacts />} />
        <Route path="/designer-mirrors"      element={<DesignerMirrors />} />
        <Route path="/designer-lights"       element={<DesignerLights />} />
        <Route path="/designer-sofas"        element={<DesignerSofas />} />
        <Route path="/curtains"              element={<Curtains />} />
        <Route path="/designer-chairs"       element={<DesignerChairs />} />
        <Route path="/dining-tables"         element={<DiningTables />} />
        <Route path="/center-tables"         element={<CenterTables />} />
        <Route path="/laminate"              element={<Laminate />} />
        <Route path="/louvers"               element={<Louvers />} />
        <Route path="/plywood"               element={<PlywoodCategory />} />
        <Route path="/hardware"              element={<Hardware />} />

        {/* ── 404 ── */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
