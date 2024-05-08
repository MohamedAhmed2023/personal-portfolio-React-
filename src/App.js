import './App.css';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import CardsData from './CardsData';
import { useState } from 'react';
import Card from './Components/CardsFilter/Card';
import Btn from './Components/CardsFilter/Btn';
import HeadingText from './Components/HeadingText';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
function App() {

  const [item, setitem] = useState(CardsData)
  const menuItem = [...new Set(CardsData.map((val) => val.type))]
  const FilterItem = (cat) => {
    const newItem = CardsData.filter((newVal) => newVal.type === cat)
    setitem(newItem);
  }
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <div className='container'>
        <div className='row'></div>
        <Btn
          menuItem={menuItem}
          FilterItem={FilterItem}
          setitem={setitem}
        />
        <Card item={item} />
        <div className="container-Contact us">
          <HeadingText title="Contact me" />
          <ContactUs />
        </div>
        <div className='container-Footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
