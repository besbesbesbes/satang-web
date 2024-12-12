export default function formatNumber(value, type) {
  if (value === 0) return "";
  const absValue = Math.abs(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return type === "minus" ? `-${absValue}` : `+${absValue}`;
}
