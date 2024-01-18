import {useState, useEffect} from 'react';
import {Regex} from '../core/validationUtils/RegularExpressions';

// Custom hook for username and password validation
export const useCredentialsValidation = (countryCode, t) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isTouched, setIsTouched] = useState({
    username: false,
    password: false,
  });

  useEffect(() => {
    const validateUsername = () => {
      const trimmedUsername = username.trim();
      let errorMessage = '';
      let regexp;
      // Validate based on the selected country code
      if (isTouched.username) {
        switch (countryCode) {
          case 'AE':
            // 5 Characters, alphanumeric
            regexp = new RegExp(Regex.COUNTRY_VALIDATION_AE);
            if (!regexp.test(trimmedUsername)) {
              errorMessage = t('errorMessage.AE');
            }
            break;
          case 'IN':
            // Must start with A and have 6 characters
            regexp = new RegExp(Regex.COUNTRY_VALIDATION_IN);
            if (!regexp.test(trimmedUsername)) {
              errorMessage = t('errorMessage.IN');
            }
            break;
          case 'PK':
            // Must have at least 4 characters, must contain a number
            regexp = new RegExp(Regex.COUNTRY_VALIDATION_PK);
            if (!regexp.test(trimmedUsername) || trimmedUsername.length < 4) {
              errorMessage = t('errorMessage.PK');
            }
            break;
          case 'EG':
            // Must be 5 characters, can contain special characters
            regexp = new RegExp(Regex.COUNTRY_VALIDATION_EG);
            if (!regexp.test(trimmedUsername)) {
              errorMessage = t('errorMessage.EG');
            }
            break;
          default:
            break;
        }
      }
      setUsernameError(errorMessage);
      setIsUsernameValid(errorMessage === '');
    };

    const validatePassword = () => {
      const trimmedPassword = password.trim();
      let errorMessage = '';

      if (isTouched.password) {
        if (trimmedPassword.length < 8) {
          errorMessage = 'Password must be at least 8 characters.';
        } else {
          errorMessage = '';
        }
      }
      setPasswordError(errorMessage);
      setIsPasswordValid(errorMessage === '');
    };

    // Trigger username and password validation on change
    validateUsername();
    validatePassword();
  }, [username, password, countryCode]);

  return {
    username,
    setUsername,
    usernameError,
    isUsernameValid,
    password,
    setPassword,
    passwordError,
    isPasswordValid,
    handleUsernameBlur: () =>
      setIsTouched(prevState => ({...prevState, username: true})),
    handlePasswordBlur: () =>
      setIsTouched(prevState => ({...prevState, password: true})),
  };
};
