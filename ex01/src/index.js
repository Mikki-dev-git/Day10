// Only change code below this line
var myPet = {
  name: "Zeus",
  species: "Dog",
  legs: "4",
  friends: "Humans, Dogs",
};
function myFunction(myObj) {
  return myObj;
}
myFunction(myPet);
// Only chnage code above this line
console.log(myFunction(myPet)); // Change this line
module.exports = { myPet, myFunction };
