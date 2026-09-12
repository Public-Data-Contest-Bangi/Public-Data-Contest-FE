import { useNavigate } from "react-router-dom";
import "./BottomNav.css";

function BottomNav() {
    const navigate = useNavigate();

    return (
        <nav className="bottom-nav">
            <button
                type="button"
                className="bottom-nav__item bottom-nav__item--active"
                aria-label="홈"
                onClick={() => navigate("/")}
            >
                <svg
                    className="bottom-nav__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4 11.5 12 4l8 7.5"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <button
                type="button"
                className="bottom-nav__item"
                aria-label="지도"
            >
                <svg
                    className="bottom-nav__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="12"
                        cy="9.5"
                        r="2.3"
                        stroke="#fff"
                        strokeWidth="2"
                    />
                </svg>
            </button>

            <button
                type="button"
                className="bottom-nav__item"
                aria-label="마이페이지"
            >
                <svg
                    className="bottom-nav__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="12"
                        cy="8"
                        r="3.5"
                        stroke="#fff"
                        strokeWidth="2"
                    />
                    <path
                        d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
        </nav>
    );
}

export default BottomNav;