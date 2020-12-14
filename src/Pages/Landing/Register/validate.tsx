const usernameValid = (value: string, maxLength: number) => {
  if (value === '') return 'This field can not empty';

  if (value.length < 6) return 'This field required at least 6 characters';

  if (value.length > maxLength)
    return `This field can not have over ${maxLength} characters`;

  if (!value.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/))
    return 'Username just accept hyphen between, start with lowercase and must have less than 39 characters';
  else return '';
};

const fullnameValid = (value: string, maxLength: number) => {
  if (value === '') return 'This field can not empty';

  if (value.length < 6) return 'This field required at least 6 characters';

  if (value.length > maxLength)
    return `This field can not have over ${maxLength} characters`;

  if (!value.match(/^[a-zA-Z\s]*$/))
    return 'The field should contain letters and spaces only';

  if (value.match(/\s{2}/))
    return 'The field should not have consecutive spaces';
  else return '';
};

const passwordValid = (value: string, maxLength: number) => {
  if (value === '') return 'This field can not empty';

  if (value.length < 6) return 'This field required at least 6 characters';

  if (value.length > maxLength)
    return `This field can not have over ${maxLength} characters`;
  else return '';
};

const emailValid = (value: string, maxLength: number) => {
  // eslint-disable-next-line
  const emailRegex = /^(([^<>()\[\]\\.,;:\s-@#$!%^&*+=_/`?{}|'"]+(\.[^<>()\[\]\\.,;:\s-@_!#$%^&*()=+/`?{}|'"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

  if (value === '') return 'This field can not empty';

  if (value.length < 6) return 'This field required at least 6 characters';

  if (value.length > maxLength)
    return `This field can not have over ${maxLength} characters`;

  if (!value.match(emailRegex)) return 'Invalid type of email';
  else return '';
};

export {usernameValid, fullnameValid, passwordValid, emailValid};
