import { BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar/nav';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <AllRoutes />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
