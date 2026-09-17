import MobileLayout from "../../components/layout/MobileLayout";
import BottomNav from "../../components/BottomNav";
import Header from "../../components/common/Header";

import MyConditionForm from "./components/MyConditionForm";
import useMyCondition from "./hooks/useMyCondition";

import * as S from "./MyConditionPage.styled";

function MyConditionPage() {
    const condition = useMyCondition();

    return (
        <MobileLayout>
            <S.Inner>
                <Header title="내 조건" />

                <MyConditionForm
                    {...condition}
                />

                <BottomNav />
            </S.Inner>
        </MobileLayout>
    );
}

export default MyConditionPage;