export const getData = async <T,>(url: string): Promise<T> => {
  // it returns something of type promise with value of type T, that this getData() func receives, and can be used throughout this function
  const response = await fetch(url);
  return await response.json();
};

// initially T is unknown but as we pass the Monsters[] or <Array<Monsters>> from app.js to getData(), we know it recieves an array of Monsters object and we can use this type T now here we used it to return a Promise type with resolved value of type T
