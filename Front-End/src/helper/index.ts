export const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return new Date(date)
    .toLocaleDateString("en-GB", options)
    .replace(/\//g, " / "); // "en-GB" ensures DD/MM/YYYY format
};
