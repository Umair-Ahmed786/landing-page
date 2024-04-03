import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner2 from './components/Banner2';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Banner/>
      <Banner2/>
      <Footer/>


    </div>
  );
}

export default App;
