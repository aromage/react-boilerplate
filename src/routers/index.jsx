import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../views/About/About';
import Home from '../views/Home/Home';

const MyRoute = () => {
  return (
    <BrowserRouter basename={'/'}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
