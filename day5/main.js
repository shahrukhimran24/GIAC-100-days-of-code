// Q13
// let transports: string[] = ["Honda motorcycle","Tesla car","Ferrari"];
// transports.forEach(transport => {
// console.log(`I would like to own a ${transport}`);
// });
// Q14
var guests = ["Anant ambani", "Mark zucker burg", "Babar azam"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",would you like to join me for dinner"));
});
// Q15
var unableToAttend = "Anant ambani";
console.log("".concat(unableToAttend, "can't make it to dinner."));
var newGuest = "Shahrukh khan";
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ",would you like to join me for dinner?"));
});
