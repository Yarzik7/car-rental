import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  justify-content: center;
  align-items: center;
  width: ${({ styles }) => `${styles.width}`};
  height: ${({ styles }) => `${styles.height}`};

  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  color: #fff;

  border-radius: 12px;
  background-color: #3470ff;
  border: none;

  cursor: pointer;
  outline: none;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export { ButtonStyled };
