// Q16
let guests: string[] = ["Anant Ambani","Babar Azam","Mark Zucker burg","Shahrukh khan"];
console.log("Great news! I found a bigger dinner tabble!");

guests.unshift("Isac Newton");
guests.splice(guests . length / 2,0 , "Charles Devin");
guests.push("Ada Lovelace");
guests.forEach(guest=> {
    console.log(`Dear ${guest},would you like to joinme for dinner`);
});
// Q17
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry,${removedGuest},I can invite you to dinner.`);
}
guests.forEach(guest=> {
    console.log(`Dear ${guest},you are still invited to dinner.`);
});
guests.splice(0,guests.length);
 console.log(guests); 

// Q18
let places: string[] = ["New Zealand","Iceland","Japan","Switzer Land"];
console.log("Original order:",places);
console.log("Alphabetical order:",[...places].sort());
console.log("Original order:",places);
places.reverse();
console.log("Reversed order:",places);
places.reverse();
console.log("Original order:",places);
places.sort();
console.log("Alphabetecal order:",places);
places.reverse();
console.log("Reverse alphabetical order:",places);