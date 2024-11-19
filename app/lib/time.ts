export const extractTime = (dateStr: string): string => {
  const match = dateStr.match(/(오전|오후) \d{1,2}:\d{2}/);
  return match ? match[0] : '';
};
