
const getRestaurant = () => {  

  return fetch(`http://localhost:8000/restaurant-list`,)
  
    .then((response) =>  response.json() )
    .catch((error) => {
      alert(error.toString());
    });
};
export default getRestaurant;