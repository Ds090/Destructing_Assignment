// Write a function that takes an object representing a person as input, and extracts the name and street
// properties from a nested object using object destructuring. The function should return an object with these two
// properties. A sample object is given below.


function extractNameAndStreet(personObj) {
    // Use object destructuring to extract the "name" and "address" properties
    const { name, age, address: { street } } = personObj;
  
    // Create a new object with the extracted properties
    const resultObj = { name, age, street };
  
    return resultObj;
  }
  
  // Sample person object
  const person = {
    name: "Mithun",
    age: 21,
    address: {
      street: "B8, Block B, Industrial Area." ,
      city: "Sector 62 Noida",
      zipCode: "Uttar Pradesh"
    },
  };
  
  // Extract name and street using the function
  const extractedInfo = extractNameAndStreet(person);
  
  console.log(extractedInfo); // Output: { name: 'John Doe', street: '123 Main St' }
  