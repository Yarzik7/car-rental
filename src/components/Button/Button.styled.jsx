import styled from '@emotion/styled';

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ styles }) => `${styles.width}`};
  height: ${({ styles }) => `${styles.height}`};

  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  color: var(--button-text-color);

  border-radius: 12px;
  background-color: var(--accent-color);
  border: none;

  cursor: pointer;
  outline: none;
  transition: background-color var(--timing-function) var(--transition-duration);

  &:hover,
  &:focus {
    background-color: var(--hover-color);
  }
`;

const LinkButtonStyled = ButtonStyled.withComponent('a');

export { ButtonStyled, LinkButtonStyled };
