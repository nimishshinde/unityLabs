import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import Story from './components/story';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" 
            element={<Landing/>}>
          </Route>

          <Route path="/story" 
            element={<Story/>}>
          </Route>

        </Routes>

        {/* <Routes>
          <Route path="/story" 
            element={<Story/>}>
          </Route>
        </Routes> */}

      </BrowserRouter>
    </>
  );
}

export default App;
