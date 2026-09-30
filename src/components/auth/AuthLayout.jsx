import Header from "../common/Header";

import * as S from "./AuthLayout.styled";

function AuthLayout({
    title,
    children,
}) {
    return (
        <S.Page>
            <S.Container>
                <Header inset={20} title={title} />

                {children}
            </S.Container>
        </S.Page>
    );
}

export default AuthLayout;