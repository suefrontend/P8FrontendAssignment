export const addCommaToPrice = (value: number) => {
  //
};
export const formatPrice = (value: number) => {
  let suffix = "";
  let division = value / 1000;

  if (division < 1) {
    return value;
  } else if (division > 1 && division < 1000) {
    suffix = "K";
  } else {
    division = division / 1000;
    suffix = "M";
  }

  return division + suffix;
};
