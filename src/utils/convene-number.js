const conveneNumber = Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "NGN",
}).format;

export default conveneNumber;
