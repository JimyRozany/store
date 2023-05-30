const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
//   currency: "EGP",//Egypt
  currency: "USD",
  style: "currency",
});

const formatCurrncy = (price) => {
  return CURRENCY_FORMATTER.format(price);
};

export default formatCurrncy;
