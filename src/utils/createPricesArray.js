export const createPricesArray = ({ amount, step }) =>
  new Array(amount).fill(0).reduce((acc, _, idx) => {
    acc.push(++idx * step);
    return acc;
  }, []);
