import icons from "../../assets/images/icons/icons.svg";

const Icons = ({ iconId, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`${icons}#${iconId}`} />
    </svg>
  );
};

export default Icons;
