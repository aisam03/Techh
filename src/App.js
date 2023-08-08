import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Header from './Components/Layout/Header';
import Hero from './Components/Elements/Hero';
import Section1 from './Components/Elements/Section1';
import Section2 from './Components/Elements/Section2';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Footer/>
    </div>
  );
}

export default App;
