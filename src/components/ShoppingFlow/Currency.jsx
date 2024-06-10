const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency',
  });
  
  export function Currency(number) {
    return CURRENCY_FORMATTER.format(number);
  }
  