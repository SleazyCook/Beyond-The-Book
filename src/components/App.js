import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <header>
        <h1>Beyond the Book</h1>
      </header>
      <Navbar />
      <Outlet context />
      <footer>
        <p>
          Developed by
          <span id="author"> Drewford</span>
        </p>
      </footer>
    </div>
  )
}

export default App;