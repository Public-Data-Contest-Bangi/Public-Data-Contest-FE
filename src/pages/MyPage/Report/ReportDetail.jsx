import {
    useNavigate,
    useParams,
} from "react-router-dom";

import MobileLayout from "../../../components/layout/MobileLayout";
import Header from "../../../components/common/Header";
import Button from "../../../components/common/Button";

import * as S from "./ReportDetail.styled";

const REPORT_DETAIL = {
    id: 1,
    category: "체육시설 정보 오류",
    status: "답변 완료",
    title: "잠실종합운동장 위치 정보가 실제와 달라요",
    date: "2026.08.20",
    content:
        "지도에서는 경사로로 표시되어 있는데 실제로는 계단만 있어서 혼자 이동할 수 없었어요. 확인 부탁드립니다.",
    images: [],
    answer:
        "불편을 드려 죄송합니다. 확인 후 수정 완료했습니다.",
    answerDate: "2026.09.01",
};

function ReportDetail() {
    const navigate = useNavigate();
    const { id } = useParams();

    const report = REPORT_DETAIL;

    return (
        <MobileLayout>
            <S.Inner>
                <Header title="신고 상세" />

                <S.Content>
                    <S.BadgeArea>
                        <S.CategoryBadge>
                            {report.category}
                        </S.CategoryBadge>

                        <S.StatusBadge>
                            {report.status}
                        </S.StatusBadge>
                    </S.BadgeArea>

                    <S.Title>
                        {report.title}
                    </S.Title>

                    <S.Date>
                        {report.date}
                    </S.Date>

                    <S.ContentBox>
                        {report.content}
                    </S.ContentBox>

                    <S.ImageArea>
                        {report.images.length > 0 ? (
                            report.images.map(
                                (image, index) => (
                                    <S.ReportImage
                                        key={index}
                                        src={image}
                                        alt={`신고 첨부 이미지 ${
                                            index + 1
                                        }`}
                                    />
                                )
                            )
                        ) : (
                            <>
                                <S.ImagePlaceholder />
                                <S.ImagePlaceholder />
                            </>
                        )}
                    </S.ImageArea>

                    <S.AnswerTitle>
                        답변
                    </S.AnswerTitle>

                    <S.AnswerBox>
                        <S.AnswerText>
                            {report.answer}
                        </S.AnswerText>

                        <S.AnswerDate>
                            {report.answerDate}
                        </S.AnswerDate>
                    </S.AnswerBox>
                </S.Content>

                <S.ButtonArea>
                    <Button
                        height="52px"
                        radius="8px"
                        onClick={() =>
                            navigate("/report-history")
                        }
                    >
                        목록으로 돌아가기
                    </Button>
                </S.ButtonArea>
            </S.Inner>
        </MobileLayout>
    );
}

export default ReportDetail;