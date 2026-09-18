import MobileLayout from "../../components/layout/MobileLayout";
import Header from "../../components/common/Header";

import OperatingProgramList from "./components/OperatingProgramList";

export default function OperatingProgramPage() {
    return (
        <MobileLayout>
            <Header title="운영 프로그램" />

            <OperatingProgramList />
        </MobileLayout>
    );
}