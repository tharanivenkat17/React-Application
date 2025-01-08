import './App.css';
import Footer from './Footer';
import Navigation from './Navigation';
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
