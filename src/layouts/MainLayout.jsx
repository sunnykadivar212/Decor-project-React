import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BackToTop from '../components/BackToTop';
import ChatWidget from '../components/ChatWidget';
import ParticlesBackground from '../components/ParticlesBackground';

function MainLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <ParticlesBackground  />
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
