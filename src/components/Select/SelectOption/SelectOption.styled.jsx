import styled from "@emotion/styled";

const SelectOptionStyled = styled.li`
  padding-left: 18px;

  font-weight: 500;
  line-height: 1.25;
  color: rgba(18, 20, 23, 0.2);
  text-align: left;

  transition: color cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
  cursor: pointer;

  &:hover {
    color: #121417;
  }
`;

export { SelectOptionStyled };
