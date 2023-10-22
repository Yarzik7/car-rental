import {
  SelectStyled,
  SelectLabelStyled,
  ChevronIconStyled,
  SelectListStyled,
  SelectListContainerStyled,
  SelectContainerStyled,
  SelectMainContainerStyled,
} from './Select.styled';
import SelectOption from './SelectOption/SelectOption';
import { useState, useRef } from 'react';
import icons from '../../assets/images/icons/icons.svg';

const Select = ({ width, placeholder, value, label, options, getValue, firstOptText, firstOptValue }) => {
  const [isOptionsShow, setIsOptionsShow] = useState(false);
  const selectRef = useRef(null);

  const toggleOptionsShow = () => setIsOptionsShow(value => !value);

  const blur = () => selectRef.current.blur();

  const onFocusChange = focusFunction => () => setTimeout(focusFunction, 100);

  const onSelectFocus = () => setIsOptionsShow(true);

  const onSelectBlur = () => setIsOptionsShow(false);

  const onSelectClick = e => {
    e.currentTarget === e.target && toggleOptionsShow();
    isOptionsShow && blur();
  };

  return (
    <SelectMainContainerStyled>
      <SelectLabelStyled>
        {label}
        <SelectContainerStyled width={width}>
          <SelectStyled
            ref={selectRef}
            tabIndex={0}
            onClick={onSelectClick}
            onFocus={onFocusChange(onSelectFocus)}
            onBlur={onFocusChange(onSelectBlur)}
            placeholder={placeholder}
          >
            {value}
          </SelectStyled>

          <ChevronIconStyled>
            <use xlinkHref={`${icons}#icon-chevron`}></use>
          </ChevronIconStyled>
        </SelectContainerStyled>
      </SelectLabelStyled>

      {isOptionsShow && (
        <SelectListContainerStyled>
          <SelectListStyled>
            <SelectOption
              key={0}
              text={firstOptText}
              value={firstOptValue}
              getValue={getValue}
              toggleOptionsShow={toggleOptionsShow}
              blur={blur}
            />
            {options.map((option, idx) => (
              <SelectOption
                key={++idx}
                text={option}
                value={option}
                getValue={getValue}
                toggleOptionsShow={toggleOptionsShow}
                blur={blur}
              />
            ))}
          </SelectListStyled>
        </SelectListContainerStyled>
      )}
    </SelectMainContainerStyled>
  );
};

export default Select;
