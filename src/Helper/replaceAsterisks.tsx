const ReplaceAsterisks = (str: string) =>
  str.replace(/\*{1,2}(.*?)\*{1,2}/g, '<strong>$1</strong>');

export default ReplaceAsterisks;
