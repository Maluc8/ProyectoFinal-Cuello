import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';
import Categories from './components/Categories/Categories';

function App() {
  return (<>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path= '/' element= {<ItemListContainer />} />
        <Route exact path= '/item/:id' element= {<ProductDetail />} />
        <Route exact path= '/category/:id' element= {<ItemListContainer />} />
        <Route exact path='/categories' element= {<Categories />} />
      </Routes>
    </Router>
  </>);
}

export default App
