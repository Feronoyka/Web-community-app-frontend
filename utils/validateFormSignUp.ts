export interface SignUpForm {
  domainName: string;
  email: string;
  password: string;
}

export const validateFormSignUp = ({
  domainName,
  email,
  password,
}: SignUpForm) => {
  if (!domainName.trim() || !email.trim() || !password.trim()) {
    return false;
  }

  return true;
};
