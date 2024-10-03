export function fva(p: number, r: number, n: number) {
  return p * (((1 + r) ** n - 1) / r);
}

export function stringToRupiah(value: string) {
  const floatValue = parseFloat(value);

  return floatValue.toLocaleString("id-ID");
}

export function removeSeparator(stringNumber: string) {
  const thousandSeparator = Intl.NumberFormat("id")
    .format(11111)
    .replace(/\p{Number}/gu, "");
  const decimalSeparator = Intl.NumberFormat("id")
    .format(1.1)
    .replace(/\p{Number}/gu, "");

  return stringNumber
    .replace(new RegExp("\\" + thousandSeparator, "g"), "")
    .replace(new RegExp("\\" + decimalSeparator), ".");

  // return stringNumber.replace(/\s/g, "");
}
