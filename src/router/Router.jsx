import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Login from "../pages/Login/Login";
import FindId from "../pages/Login/FindId";

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
            </Routes>
        </BrowserRouter>
    );
}

export default Router;