// Q13
// let transports: string[] = ["Honda motorcycle","Tesla car","Ferrari"];
// transports.forEach(transport => {
    // console.log(`I would like to own a ${transport}`);
// });
// Q14
let guests: string[] = ["Anant ambani","Mark zucker burg","Babar azam"];
guests.forEach(guest =>{
    console.log(`Dear ${guest},would you like to join me for dinner`);
});
// Q15
let unableToAttend = "Anant ambani";
console.log(`${unableToAttend}can't make it to dinner.`);
let newGuest = "Shahrukh khan";
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(guests => {
    console.log(`Dear ${guests},would you like to join me for dinner?`);
});