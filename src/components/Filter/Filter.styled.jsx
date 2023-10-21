import styled from "@emotion/styled";

const SelectStyled = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const OptionStyled = styled.option`
  background-color: #f9f9f9;
`;

// /* Зміна вигляду стрілки вибору */
// #mySelect::after {
//   content: "\25BC";
//   position: absolute;
//   top: 20px;
//   right: 10px;
//   font-size: 12px;
//   color: #555;
//   pointer-events: none;
// }

// /* Стилізація опцій */
// #mySelect option {
//   background-color: #f9f9f9;
// }

export { SelectStyled, OptionStyled };
