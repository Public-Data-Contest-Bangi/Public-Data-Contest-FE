import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "../pages/yein/Home";

import Login from "../pages/Login/Login";
import FindId from "../pages/Login/FindId";
import FindPassword from "../pages/Login/FindPassword";
import Signup from "../pages/Login/Signup";

import Preference from "../pages/Onboarding/Preference";

import ExerciseRecommend from "../pages/Exercise/ExerciseRecommend";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/home"
                    element={<Home />}
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
                    path="/find-password"
                    element={<FindPassword />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

                <Route
                    path="/preference"
                    element={<Preference />}
                />

                <Route
                    path="/exercise-recommend"
                    element={<ExerciseRecommend />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;