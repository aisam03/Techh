import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Header from './Components/Layout/Header';
import Hero from './Components/Elements/Hero';
import Section1 from './Components/Elements/Section1';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Section1/>
    </div>
  );
}

export default App;
