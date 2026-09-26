import * as S from "./ExerciseRecommendCard.styled";

function ExerciseRecommendCard({
    title,
    description,
    image,
    imageAlt,
    onClick,
}) {
    return (
        <S.Card
            type="button"
            onClick={onClick}
        >
            <S.CardText>
                <S.CardTitle>
                    {title}
                </S.CardTitle>

                <S.CardDescription>
                    {description}
                </S.CardDescription>
            </S.CardText>

            <S.CardImage
                src={image}
                alt={imageAlt}
            />
        </S.Card>
    );
}

export default ExerciseRecommendCard;