import {
  SelectStyled,
  SelectLabelStyled,
  ChevronIconStyled,
  SelectListStyled,
  SelectListContainerStyled,
  SelectContainerStyled,
} from "./Select.styled";
import SelectOption from "./SelectOption/SelectOption";
import { useState, useRef } from "react";
import icons from "../../assets/images/icons/icons.svg";

const Select = ({
  width,
  placeholder,
  label,
  options,
  getValue,
  firstOptText,
  firstOptValue,
}) => {
  const [isOptionsShow, setIsOptionsShow] = useState(false);
  const selectRef = useRef(null);

  //   console.log("show: ", isOptionsShow);

  const toggleOptionsShow = (evt) => {
    // if (evt.target === evt.currentTarget) {
    console.log("t: ", evt.target);
    console.log("cT: ", evt.currentTarget);
    setIsOptionsShow((value) => !value);
    // }
  };

  return (
    <SelectLabelStyled>
      {label}
      <SelectStyled
        width={width}
        ref={selectRef}
        // onFocus={() => {
        //   console.log("onFocus");
        //   setIsOptionsShow(true);
        // }}
        onClick={(evt) => {
          console.log("click");
          toggleOptionsShow(evt);
        }}
        onBlur={() => {
          setIsOptionsShow(false);
        }}
      >
        {placeholder}
        <ChevronIconStyled>
          <use xlinkHref={`${icons}#icon-chevron`}></use>
        </ChevronIconStyled>

        {isOptionsShow && (
          <SelectListContainerStyled>
            <SelectListStyled>
              <SelectOption
                key={0}
                text={firstOptText}
                value={firstOptValue}
                getValue={getValue}
                toggleOptionsShow={setIsOptionsShow}
              />
              {options.map((option, idx) => (
                <SelectOption
                  key={++idx}
                  text={option}
                  value={option}
                  getValue={getValue}
                  toggleOptionsShow={setIsOptionsShow}
                />
              ))}
            </SelectListStyled>
          </SelectListContainerStyled>
        )}
      </SelectStyled>
    </SelectLabelStyled>
  );
};

export default Select;

// return (
//   <SelectLabelStyled>
//     {label}
//     <SelectStyled
//       width={width}
//       ref={selectRef}
//       onFocus={() => setIsOptionsShow(true)}
//       onBlur={() => setIsOptionsShow(false)}
//     >
//       {placeholder}
//       <ChevronIconStyled>
//         <use xlinkHref={`${icons}#icon-chevron`}></use>
//       </ChevronIconStyled>

//       {isOptionsShow && (
//         <SelectListContainerStyled>
//           <SelectListStyled>
//             {options.map((option, idx) => (
//               <SelectOption
//                 key={idx}
//                 text={option}
//                 value={option}
//                 getValue={getValue}
//                 toggleOptionsShow={toggleOptionsShow}
//               />
//             ))}
//           </SelectListStyled>
//         </SelectListContainerStyled>
//       )}
//     </SelectStyled>
//   </SelectLabelStyled>
// );

// return (
//   <SelectLabelStyled>
//     {label}
//     <SelectContainerStyled width={width}>
//       <SelectStyled
//         ref={selectRef}
//         readOnly
//         onFocus={() => setIsOptionsShow(true)}
//         placeholder={placeholder}
//       />
//       <ChevronIconStyled>
//         <use xlinkHref={`${icons}#icon-chevron`}></use>
//       </ChevronIconStyled>
//       {isOptionsShow && (
//         <SelectListContainerStyled>
//           <SelectListStyled>
//             {options.map((option, idx) => (
//               <SelectOption
//                 key={idx}
//                 text={option}
//                 value={option}
//                 getValue={getValue}
//                 toggleOptionsShow={toggleOptionsShow}
//                 blur={blur}
//               />
//             ))}
//           </SelectListStyled>
//         </SelectListContainerStyled>
//       )}
//     </SelectContainerStyled>
//   </SelectLabelStyled>
// );