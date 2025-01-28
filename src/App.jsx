import './App.css';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;