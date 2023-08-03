
export const processInput = (
  fen: string, 
  fromIndex: number, 
  toIndex: number,
): string => {
  const tempMsg = `${fromIndex} -> ${toIndex} : ${fen}`;
  return tempMsg;
};