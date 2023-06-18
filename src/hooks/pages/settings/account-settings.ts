import { useState, useEffect } from 'react';

const useAccountSettings = () => {
  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  useEffect(() => {

  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return {
    firstName: { value: firstName, set: setFirstName },
    lastName: { value: lastName, set: setLastName },
    email: { value: email, set: setEmail },
    password: { value: password, set: setPassword },
    handleSubmit
  }
}

export default useAccountSettings;
