const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const Currency = (number) => {
  return CURRENCY_FORMATTER.format(number);
};

export default Currency;
