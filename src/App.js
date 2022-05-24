import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route  } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navegacion/Navbar';
import Inicio from './Components/Paginas/Inicio';
import Pokemon from './Components/Paginas/Pokemon';


function App() {
  return (
    <div className="App" >

      <Router>

        <Navbar />
          <Switch>
            <Route path='' exact element={<Inicio/>}/>
            <Route path='/pokemon' element={<Pokemon/>}/>
          </Switch>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
