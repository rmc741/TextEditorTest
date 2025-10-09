import {Route, Routes} from "react-router-dom";
import AppRoutes from "../routes/Routes";

const AppRouteConfig = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<MainContent/>}> */}
      <Route path="/" element={<div>aaaa</div>}>
        <Route path="/*" element={<AppRoutes/>}/>
      </Route>
    </Routes>
  );
};

export default AppRouteConfig;
