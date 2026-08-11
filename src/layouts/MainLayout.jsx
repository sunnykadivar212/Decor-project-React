import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import ScrollToTop from '../components/layout/ScrollToTop/ScrollToTop';
import BackToTop from '../components/layout/BackToTop/BackToTop';
import ChatWidget from '../components/features/ChatWidget/ChatWidget';


function MainLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      {/* Particles Removed */}
      <div className="app">
        <Header />
        <main className="app-content">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <ChatWidget />
      </div>
    </>
  );
}

export default MainLayout;
