import * as S from '../FacilitySearch.styled';

export default function RegionSelectDropdown({
  type,
  value,
  options,
  isOpen,
  isLoading,
  disabled = false,
  placeholder,
  wrapperRef,
  onToggle,
  onSelect,
}) {
  const isProvince = type === 'province';

  const displayValue = isLoading ? '불러오는 중...' : value || placeholder;

  return (
    <S.SelectWrapper
      ref={wrapperRef}
      $disabled={disabled}
      onClick={() => {
        if (disabled) {
          return;
        }
        onToggle();
      }}
    >
      {isProvince ? (
        <S.BuildingIcon viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M8 7H10M14 7H16M8 11H10M14 11H16M8 15H10M14 15H16M11 21V17H13V21" />
        </S.BuildingIcon>
      ) : (
        <S.LocationIcon viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C8.1 2 5 5.1 5 9C5 14.3 12 22 12 22C12 22 19 14.3 19 9C19 5.1 15.9 2 12 2Z" />
          <circle cx="12" cy="9" r="2.4" />
        </S.LocationIcon>
      )}

      <S.SelectButton
        type="button"
        tabIndex={-1}
        disabled={disabled}
        $placeholder={!value && !isLoading}
      >
        {displayValue}
      </S.SelectButton>

      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
        style={{
          opacity: disabled ? 0.35 : 1,
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.15s ease',
        }}
      >
        <path d="M3 4.5L6 7.5L9 4.5" stroke="#8C8C8C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {isOpen && !disabled && (
        <S.SelectMenu onClick={(event) => event.stopPropagation()}>
          {options.map((item) => (
            <li key={item}>
              <button type="button" onClick={() => onSelect(item)}>
                {item}
              </button>
            </li>
          ))}
        </S.SelectMenu>
      )}
    </S.SelectWrapper>
  );
}