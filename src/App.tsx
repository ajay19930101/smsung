import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import ProductHero from './components/ProductHero';
import Footer from './components/Footer';
import Bandwidth from './components/Bandwidth';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumb />
      <ProductHero />
      <Bandwidth />
      <Footer />
    </div>
  );
}

export default App;