import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';
import './App.css';

import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
        <CustomCursor />
      </Router>
    </HelmetProvider>
  );
}

export default App;
