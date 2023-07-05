
const getRestaurant = (order:Number) => {  

  return fetch(`http://localhost:8000/restaurant?sortedBy=${order}`,)
  
    .then((response) =>  response.json() )
    .catch((error) => {
      alert(error.toString());
    });
};
export default getRestaurant;