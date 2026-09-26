import fitnessRecommendCharacter from "../../../assets/images/fitness-recommend.png";

import * as S from "./FitnessResultGuideModal.styled";

function FitnessResultGuideModal({
    onClose,
    onConfirm,
}) {
    return (
        <S.Overlay
            onClick={onClose}
        >
            <S.Modal
                role="dialog"
                aria-modal="true"
                aria-labelledby="fitness-guide-title"
                onClick={(e) =>
                    e.stopPropagation()
                }
            >
                <S.ModalCharacter
                    src={
                        fitnessRecommendCharacter
                    }
                    alt=""
                />

                <S.Title
                    id="fitness-guide-title"
                >
                    체력 결과가 필요해요
                </S.Title>

                <S.Description>
                    체력 결과로 운동을 추천받으려면
                    <br />
                    <strong>
                        국민체력100 측정 결과
                    </strong>
                    가 필요해요.
                </S.Description>

                <S.SubText>
                    측정 결과가 준비되어 있다면
                    <br />
                    등급 입력 화면으로 이동할게요.
                </S.SubText>

                <S.ConfirmButton
                    type="button"
                    onClick={onConfirm}
                >
                    확인했어요
                </S.ConfirmButton>

                <S.CancelButton
                    type="button"
                    onClick={onClose}
                >
                    다음에 할게요
                </S.CancelButton>
            </S.Modal>
        </S.Overlay>
    );
}

export default FitnessResultGuideModal;