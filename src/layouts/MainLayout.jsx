import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BackToTop from '../components/BackToTop';
import ChatWidget from '../components/ChatWidget';
import ParticleBackground from '../components/ParticleBackground';

function MainLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <ParticleBackground style="golden-luxury" />
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
