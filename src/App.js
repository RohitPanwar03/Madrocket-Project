
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Academics from './Pages/Academics';
import Admission from './Pages/Admission';
import Faculty from './Pages/Faculty';
import Gallery from './Pages/Gallery';
import Student from './Pages/Student';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/academics' element={<Academics />}></Route>
        <Route path='/admission' element={<Admission />}></Route>
        <Route path='/faculty' element={<Faculty />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/students' element={<Student />}></Route>
      </Routes>
    </div>
  );
}

export default App;
