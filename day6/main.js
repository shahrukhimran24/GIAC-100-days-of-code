var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Q16
var guests = ["Anant Ambani", "Babar Azam", "Mark Zucker burg", "Shahrukh khan"];
console.log("Great news! I found a bigger dinner tabble!");
guests.unshift("Isac Newton");
guests.splice(guests.length / 2, 0, "Charles Devin");
guests.push("Ada Lovelace");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",would you like to joinme for dinner"));
});
// Q17
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry,".concat(removedGuest, ",I can invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you are still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
// Q18
var places = ["New Zealand", "Iceland", "Japan", "Switzer Land"];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetecal order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
