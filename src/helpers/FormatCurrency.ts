const FormatCurrency = (
  data: number,
  currency: string,
  numberFormat: string
) => {
  const formatCurrency = new Intl.NumberFormat(numberFormat, {
    style: "currency",
    currency: currency,
  }).format(data);
  return formatCurrency;
};

export default {
  FormatCurrency,
};
