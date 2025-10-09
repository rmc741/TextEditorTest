import {Route, Routes} from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<div>HOME</div>}/>
    </Routes>
  );
};

export default AppRoutes;
