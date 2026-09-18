import MobileLayout from "../../components/layout/MobileLayout";
import Header from "../../components/common/Header";

import ProgramResultList from "./components/ProgramResultList";

export default function ProgramResultPage() {
    return (
        <MobileLayout>
            <Header title="프로그램 둘러보기" />

            <ProgramResultList />
        </MobileLayout>
    );
}