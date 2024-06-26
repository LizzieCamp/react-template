export const formatCurrrency = (currencyString) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "GBP",
  }).format(currencyString);
};
