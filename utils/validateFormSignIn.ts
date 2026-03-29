interface SignInForm {
  email: string;
  password: string;
}

const validateFormSignIn = ({ email, password }: SignInForm) => {
  if (!email.trim() || !password.trim()) {
    return false;
  }

  return true;
};

export default validateFormSignIn;
