import { useNavigate } from "react-router-dom";

import { REPORTS } from "../data/reportData";

function useReportHistory() {
    const navigate = useNavigate();

    const handleReportClick = (id) => {
        navigate(`/report-history/${id}`);
    };

    const handleNewReport = () => {
        navigate("/report/new");
    };

    return {
        reports: REPORTS,
        handleReportClick,
        handleNewReport,
    };
}

export default useReportHistory;