// Only change code below this line
var players = {
  7: "Muhamed Besic",
  10: "Miralem Pjanic",
  11: "Edin Dzeko",
};
function myFunction(myObj) {
  var player = "Miralem Pjanic";
  var playerNumber = myObj["player"];
  return player;
}
console.log(myFunction(players));
// Only chnage code above this line
module.exports = { players, myFunction };
