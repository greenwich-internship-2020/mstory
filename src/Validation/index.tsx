export const Validate = (value: any, maxLength: number) => {
  if (value === '') return 'This field can not empty';
  if (value.length < 6) return 'This field required at least 6 characters';
  if (value.length > maxLength)
    return `This field can not have over ${maxLength} characters`;
  else return '';
};
