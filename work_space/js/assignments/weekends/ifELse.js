function weatherReport() {
  const temperature = 90;

  // if (temperature > 30) {
  //   weather = "hot";
  // } else {
  //   weather = "cool";
  // }
  const weather = temperature > 30 ? "hot" : "cold";

  console.log(weather);
}

function memberShip() {
  const isMember = false;                   // if (isMember) {
                                            //   discount = 10;
  let discount = isMember ? 10 : 0;         // } else {
                                            //   discount = 0;
                                            // }

  

  if(isMember) {
    discount = 10;
  }

  console.log("discount is", discount);

}
// if (day === "Saturday" || day === "Sunday") {
//   isWeekend = true;
// } else {
//   isWeekend = false;
// }
const day = "Monday";
 
const isWeekend = day === "Saturday" || day === "sunday";

console.log("weekend", isWeekend);

const cartItems = "123";

// if (cartItems.length === 0) {
//   status = "empty";
// } else {
//   status = "ready";
// }

let status = cartItems.length ? "ready" : "empty";
console.log("cartitems", status);

const marks = 100;

// if (marks >= 90) {
//   grade = "A";
// } else {
//   grade = "B";
// }

const grade = marks >= 90 ? "A" : "B";

console.log("grade is", grade);

// if (userType === "admin") {
//   baseAccess = "all";
//   canDelete = true;
// } else {
//   baseAccess = "limited";
//   canDelete = false;
// }

let baseAccess = "limited";
let canDelete = false;
const userType = "admin";

if(userType === "admin") {
  baseAccess = "all";
  canDelete = true;
}

console.log("access is", baseAccess, "candelete", canDelete);

const isPremiumUser = true;
const basePrice =10000;

// if (isPremiumUser) {
//   discount = basePrice * 0.2;
//   finalPrice = basePrice - discount;
// } else {
//   discount = basePrice * 0.05;
//   finalPrice = basePrice - discount;
// }

discount = isPremiumUser ? basePrice * 0.2 : basePrice * 0.5;
const finalPrice = basePrice - discount;

console.log("discount", discount, "final price", finalPrice);

// if (speed > 100) {
//   message = "Too fast";
//   penalty = 200;
// } else {
//   message = "OK";
//   penalty = 0;
// }

const role = "student";

// if (role === "teacher") {
//   dashboard = "gradebook";
//   permissions = "view/edit/grade";
// } else {
//   dashboard = "courses";
//   permissions = "view";
// }

const dashboard = role === "teacher" ? "gradebook" : "courses";
const  permissions = role === "teacher" ? "view/edit" : "view";

console.log("dashboard", dashboard, "permissions", permissions);

// if (age >= 65) {
//   category = "senior";
//   ticketPrice = 5;
// } else {
//   category = "adult";
//   ticketPrice = 10;
// }

