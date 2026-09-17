import Header from "../../components/common/Header";
import BottomNav from "../../components/BottomNav";

import FavoritesList from "./components/FavoritesList";

import * as S from "./FavoritesPage.styled";

export default function FavoritesPage() {
    return (
        <S.Page>
            <S.Container>
                <S.Content>
                    <Header title="즐겨찾기" />

                    <FavoritesList />
                </S.Content>

                <BottomNav />
            </S.Container>
        </S.Page>
    );
}