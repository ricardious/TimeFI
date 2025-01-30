import { Route, Routes } from "react-router-dom";
import routesConstants from "../constants/routeConstants";
import LayoutContainer from "../layout/LayoutContainer";
import Home from "../screens/Home/HomeScreen";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={routesConstants.ROOT} element={<LayoutContainer />}>
                <Route path={routesConstants.HOME} element={<Home />} />
            </Route>

        </Routes>
    );
};

export default AppRoutes;