import styled from "styled-components";

const CommonButton = styled.button`
    width: 100%;
    height: ${({ $height }) => $height || "52px"};

    border: none;
    border-radius: ${({ $radius }) => $radius || "10px"};

    background: ${({ disabled }) =>
        disabled ? "#d9d9d9" : "#41dc99"};

    color: #ffffff;

    font-size: ${({ $fontSize }) => $fontSize || "17px"};
    font-weight: 600;

    cursor: ${({ disabled }) =>
        disabled ? "default" : "pointer"};

    &:hover {
        opacity: ${({ disabled }) =>
        disabled ? 1 : 0.9};
    }
`;

function Button({
    children,
    type = "button",
    disabled = false,
    onClick,
    height,
    radius,
    fontSize,
    className,
}) {
    return (
        <CommonButton
            type={type}
            disabled={disabled}
            onClick={onClick}
            $height={height}
            $radius={radius}
            $fontSize={fontSize}
            className={className}
        >
            {children}
        </CommonButton>
    );
}

export default Button;