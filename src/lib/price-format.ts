export const priceFormat = (price: number): string => {
  return `${new Intl.NumberFormat("fa-IR")
    .format(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان`;
};
