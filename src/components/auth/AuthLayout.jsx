import { useNavigate } from "react-router-dom";
import * as S from "./AuthLayout.styled";

function AuthLayout({ title, children }) {
    const navigate = useNavigate();

    return (
        <S.Page>
            <S.Container>
                <S.Header>
                    <S.BackButton
                        type="button"
                        onClick={() => navigate(-1)}
                    >
                        ‹
                    </S.BackButton>

                    <S.Title>{title}</S.Title>
                </S.Header>

                {children}
            </S.Container>
        </S.Page>
    );
}

export default AuthLayout;