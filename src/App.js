import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Book from './Components/pages/Books';
import Categories from './Components/pages/Categories';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
