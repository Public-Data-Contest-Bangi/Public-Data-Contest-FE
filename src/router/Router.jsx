import { lazy, Suspense } from "react";
const SearchFilter = lazy(() => import("../pages/SearchFilter/SearchFilter"));
const SearchResult = lazy(() => import("../pages/SearchResult/SearchResult"));
const SearchEmpty = lazy(() => import("../pages/SearchEmpty/SearchEmpty"));
const FacilityDetail = lazy(() => import("../pages/FacilityDetail/FacilityDetail"));
const DepartureSearch = lazy(() => import("../pages/DepartureSearch/DepartureSearch"));
const FacilitySearch = lazy(() => import("../pages/FacilitySearch/FacilitySearch"));
const FacilityMap = lazy(() => import("../pages/FacilityMap/FacilityMap"));


import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));

const Login = lazy(() => import("../pages/Login/Login"));
const FindId = lazy(() => import("../pages/Login/FindId"));
const FindPassword = lazy(() => import("../pages/Login/FindPassword"));
const Signup = lazy(() => import("../pages/Login/Signup"));

const Preference = lazy(() => import("../pages/Onboarding/Preference"));

const MyPage = lazy(() => import("../pages/MyPage/MyPage"));
const ProfileEditPage = lazy(() => import("../pages/MyPage/ProfileEditPage"));
const ReportHistory = lazy(() => import("../pages/MyPage/Report/ReportHistory"));
const ReportDetail = lazy(() => import("../pages/MyPage/Report/ReportDetail"));
const ReportCreate = lazy(() => import("../pages/MyPage/Report/ReportCreate"));
const MyConditionPage = lazy(() => import("../pages/MyPage/MyConditionPage"));
const FavoritesPage = lazy(() => import("../pages/MyPage/FavoritesPage"));

const ProgramBrowsePage = lazy(() => import("../pages/Program/ProgramBrowsePage"));
const ProgramRegionPage = lazy(() => import("../pages/Program/ProgramRegionPage"));
const ProgramResultPage = lazy(() => import("../pages/Program/ProgramResultPage"));
const OperatingProgramPage = lazy(() => import("../pages/Program/OperatingProgramPage"));

const ExerciseRecommend = lazy(() => import("../pages/Exercise/ExerciseRecommend"));
const FirstExercise = lazy(() => import("../pages/Exercise/FirstExercise"));
const ExerciseResult = lazy(() => import("../pages/Exercise/ExerciseResult"));
const FitnessResultIntro = lazy(() => import("../pages/Exercise/FitnessResultIntro"));
const FitnessResultInput = lazy(() => import("../pages/Exercise/FitnessResultInput"));
const FitnessResultRecommend = lazy(() => import("../pages/Exercise/FitnessResultRecommend"));
const ExerciseDetailPage = lazy(() => import("../pages/Exercise/ExerciseDetailPage"));

import ScrollToTop from "../components/ScrollToTop";
const AdminPage = lazy(() => import("../pages/Admin/AdminPage"));

function Router() {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Suspense fallback={<div role="status" style={{ padding: "24px 20px", maxWidth: 480, margin: "0 auto", boxSizing: "border-box" }}>??? ???? ????.</div>}>
            <Routes>
                <Route
                    path="/"
                    element={<Login />}
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
                    path="/report-history"
                    element={<ReportHistory />}
                />

                <Route
                    path="/report-history/:id"
                    element={<ReportDetail />}
                />

                <Route
                    path="/report/new"
                    element={<ReportCreate />}
                />

                <Route
                    path="/facility-search"
                    element={<FacilitySearch />}
                />

                <Route
                    path="/facility-map"
                    element={<FacilityMap />}
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
                    path="/fitness-result"
                    element={<FitnessResultIntro />}
                />

                <Route
                    path="/fitness-result/input"
                    element={<FitnessResultInput />}
                />

                <Route
                    path="/fitness-result/recommend"
                    element={<FitnessResultRecommend />}
                />

                <Route
                    path="/exercise-result"
                    element={<ExerciseResult />}
                />

                <Route
                    path="/exercise/:exerciseId"
                    element={<ExerciseDetailPage />}
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
                    path="/my-condition"
                    element={<MyConditionPage />}
                />

                <Route
                    path="/favorites"
                    element={<FavoritesPage />}
                />

                <Route
                    path="/search-empty"
                    element={<SearchEmpty />}
                />

                <Route
                    path="/accessible-route"
                    element={<FacilityMap />}
                />

                <Route
                    path="/departure-search"
                    element={<DepartureSearch />}
                />

                <Route
                    path="/program-browse"
                    element={<ProgramBrowsePage />}
                />

                <Route
                    path="/program-browse/region"
                    element={<ProgramRegionPage />}
                />

                <Route
                    path="/program-browse/results"
                    element={<ProgramResultPage />}
                />

                <Route
                    path="/facility-detail/:id/programs"
                    element={<OperatingProgramPage />}
                />

                <Route
                    path="/admin"
                    element={<AdminPage />}
                />
            </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default Router;