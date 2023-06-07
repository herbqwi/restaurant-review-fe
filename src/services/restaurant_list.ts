
const getRestaurant = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/restaurant-list`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default getRestaurant

