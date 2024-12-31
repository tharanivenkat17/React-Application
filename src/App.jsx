import './App.css';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
    </BrowserRouter>
  );
}

export default App;
