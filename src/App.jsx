import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPageView1 from './components/LandingPageView1';
import LandingPageView2 from './components/LandingPageView2';
import 'animate.css';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingPageView1 />} />
          <Route path="/landing2" element={<LandingPageView2 />} />
          
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
