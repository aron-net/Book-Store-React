import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Book from './Components/pages/Books';
import Categories from './Components/pages/Categories';
import './App.css';

const book = [
  {
    id: '1',
    title: 'The Hunger Games',
    author: ' Suzanne Collins',
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: '3',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Book items={book} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
