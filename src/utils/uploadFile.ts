export const isValidImage = (file: File) => {
  const validTypes = ['image/png', 'image/gif'];

  return validTypes.indexOf(file.type) > -1;
};

export const getCleanedData = (data: Array<Array<string>>) => {
  const result: Array<string> = [];

  data.map((item) => {
    if (item[0] !== '') {
      result.push(item[0]);
    }
  });

  return result;
};
