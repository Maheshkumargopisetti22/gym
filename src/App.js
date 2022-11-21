import logo from './logo.svg';
import './App.css';
import NavBar from './component/nav';
import CoverPage from './component/product';
import BackImg from './component/cover';
import Data from './component/data1';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BackImg />
      <Data></Data>
      <CoverPage />
    </div>
  );
}

export default App;
