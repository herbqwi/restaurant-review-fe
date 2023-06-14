

const loginUser = (email: string, password: string) => {
  return fetch('http://127.0.0.1:8000/user/auth'
    , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        credentials: {
          email,
          password
        }
      })
    })
    .then(async (response) => {
      return await response.json();
    })
    .catch((error) => {
      console.log(error.toString());
      alert(error.toString());
    });
};
export {
  loginUser
};
