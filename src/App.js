
import './App.css';
import { Components } from './Components';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Home } from './Folder/Home';
import { About } from './Folder/About';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Components/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      
     </Routes >
     </BrowserRouter>
    </div>
  );
}

export default App;
