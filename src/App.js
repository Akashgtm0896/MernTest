import './App.css';
import Editor from './Components/Editor/Editor';
import Maincomp from './Components/Maincomp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <div className="container my-4" style={{ backgroundColor: '#CAF1DD' }}>
        <Maincomp />
        <imageupload />
      </div> */}

      <Router>
        <Routes>
          <Route path='/' element={<Maincomp />}></Route>
          <Route path='/editor' element={<Editor />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
