export const isValidImage = (file: File) => {
  const validTypes = ['image/png', 'image/gif'];

  return validTypes.indexOf(file.type) > -1;
};
