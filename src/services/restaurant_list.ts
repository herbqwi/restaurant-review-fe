const getRestaurant = (filter:string) =>{
  return fetch(`http://localhost:8000/restaurant?order=${filter}?sortedBy=${order}`,)
  .then((response) => response.json())
  .catch((error) => {
    alert(error.toString());
  });

}
export default getRestaurant;