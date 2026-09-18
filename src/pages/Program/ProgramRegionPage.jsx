import MobileLayout from "../../components/layout/MobileLayout";
import Header from "../../components/common/Header";

import RegionSelection from "./components/RegionSelection";

export default function ProgramRegionPage() {
    return (
        <MobileLayout>
            <Header title="프로그램 둘러보기" />

            <RegionSelection />
        </MobileLayout>
    );
}