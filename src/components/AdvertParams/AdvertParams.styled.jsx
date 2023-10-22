import styled from '@emotion/styled';

export const AdvertParamsStyled = styled.p`
  margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : 0)};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--secondary-text-color);
`;
