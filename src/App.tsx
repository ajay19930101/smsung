import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import ProductHero from './components/ProductHero';
import Footer from './components/Footer';
import Bandwidth from './components/Bandwidth';
import './assets/fonts/fonts.css';


function App() {
  return (
    <div className="min-h-screen bg-white font-samsung">
      <Header />
      <Breadcrumb />
      <ProductHero />
      <Bandwidth />
      <Footer />
    </div>
  );
}

export default App;