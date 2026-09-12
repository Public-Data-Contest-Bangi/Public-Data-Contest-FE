import FacilitySearch from "../pages/yein/FacilitySearch";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Login from "../pages/Login/Login";
import FindId from "../pages/Login/FindId";
import Home from "../pages/yein/Home";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/" element={<Login />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/find-id"
                    element={<FindId />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />
                <Route
    path="/facility-search"
    element={<FacilitySearch />}
/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;