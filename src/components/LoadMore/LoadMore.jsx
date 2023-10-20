import { LoadMoreStyled } from "./LoadMore.styled";

const LoadMore = ({ onClick = () => {} }) => {
  return <LoadMoreStyled onClick={onClick}>Load more</LoadMoreStyled>;
};

export default LoadMore;
