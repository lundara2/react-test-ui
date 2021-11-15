import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from './Components';
import RoutesPage from './Services/Routes';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <RoutesPage />
        <Footer />
      </div>
    </Router>
  );
}
