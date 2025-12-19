import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LanguageSwitcher from './component/LanguageSwitcher';
import Navigation from './component/Navigation';
import Home from './route/Home';
import About from './route/About';
import Contact from './route/Contact';
import Products from './route/Products';
import Services from './route/Services';
import Blog from './route/Blog';
import BlogPost from './route/BlogPost';
import FAQ from './route/FAQ';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App">
          <LanguageSwitcher />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
