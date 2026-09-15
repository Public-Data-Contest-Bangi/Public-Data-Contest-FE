import SearchFilter from "../pages/yein/SearchFilter";
import SearchResult from "../pages/yein/SearchResult";
import SearchEmpty from "../pages/yein/SearchEmpty";
import FacilityDetail from "../pages/yein/FacilityDetail";
import AccessibleRoute from "../pages/yein/AccessibleRoute";
import DepartureSearch from "../pages/yein/DepartureSearch";
import FacilitySearch from "../pages/yein/FacilitySearch";

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

import MyPage from "../pages/MyPage/MyPage";
import ProfileEditPage from "../pages/MyPage/ProfileEditPage";

import ExerciseRecommend from "../pages/Exercise/ExerciseRecommend";
import FirstExercise from "../pages/Exercise/FirstExercise";
import ExerciseResult from "../pages/Exercise/ExerciseResult";

import ScrollToTop from "../components/ScrollToTop";

function Router() {
    return (
        <BrowserRouter>
            <ScrollToTop />

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
                    path="/facility-search"
                    element={<FacilitySearch />}
                />

                <Route
                    path="/preference"
                    element={<Preference />}
                />

                <Route
                    path="/exercise-recommend"
                    element={<ExerciseRecommend />}
                />

                <Route
                    path="/first-exercise"
                    element={<FirstExercise />}
                />

                <Route
                    path="/exercise-result"
                    element={<ExerciseResult />}
                />

                <Route
                    path="/search-filter"
                    element={<SearchFilter />}
                />

                <Route
                    path="/search-result"
                    element={<SearchResult />}
                />

                <Route
                    path="/facility-detail/:id"
                    element={<FacilityDetail />}
                />

                <Route
                    path="/mypage"
                    element={<MyPage />}
                />

                <Route
                    path="/profile-edit"
                    element={<ProfileEditPage />}
                />

                <Route
                    path="/search-empty"
                    element={<SearchEmpty />}
                />

                <Route
                    path="/accessible-route"
                    element={<AccessibleRoute />}
                />

                <Route
                    path="/departure-search"
                    element={<DepartureSearch />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;