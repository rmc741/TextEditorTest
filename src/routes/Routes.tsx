import {Route, Routes} from "react-router-dom";
import { About } from "../pages/about/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About/>}/>
    </Routes>
  );
};

export default AppRoutes;
