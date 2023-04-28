

const loginUser = (email: string, password: string) => {
    return fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/users')
      .then(async response => {
        const users:any = await response.json();
        
        return users.find((user: any) => user.email === email && user.password === password) || null;
      })
      .catch(error => {
        console.error(error);
        return null;
      });
  };
  export {
    loginUser
  };