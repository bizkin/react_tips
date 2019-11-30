//let & const
console.log(
  "%cUncomment for examples",
  "color:#333; background:#e3d; padding:0 0.3rem"
);
console.log("%cLet Example", "color:#333; background:#eee; padding:0 0.3rem");
let TVShow = "The Voice";
TVShow = "Family Guy";
//---_____----
console.log(TVShow);

//spread opereator
console.log(
  "%cSpread Example",
  "color:#333; background:#eee; padding:0 0.3rem"
);

//spread one array
const Flavors = ["Bitter", "Sweet", "Salty"];
console.log(...Flavors);

//spread multiple arrays
const Cold = ["Blue", "Ice", "Polski"];
const Hot = ["Red", "Fire", "Morocco"];
const WomenType = [...Cold, ...Hot];
console.log(WomenType);

//Template Literals
console.log(
  "%cTemplate Literals Example",
  "color:#333; background:#eee; padding:0 0.3rem"
);
const student = {
  name: "John Doe",
  city: "Ambersand"
};

let message = `Hello ${student.name} from ${student.city}`;
console.log(message);
console.log(
  "%cArrow Functions",
  "color:#333; background:#eee; padding:0 0.3rem"
);

// Arrow Function Expression
const Student = (name, city) => console.log(`Hello ${name} from ${city}`);
Student("Tboy", "Acapella");

console.log(
  "%cBlock body syntax EXAMPLES",
  "color:#333; background:#eee; padding:0 0.3rem"
);

const UpperCase = name => {
  name = name.toUpperCase();
  remove_space = name.split(" ").join(""); //handy tool too remove space
  return `${remove_space.length} characters make up ${name}`;
};
console.log(UpperCase("George Bush"));

const multiply = (x, y) => x * y;
console.log(multiply(2, 5));

(() => {
  console.log("iffe es6");
})();

(param => {
  param = [1, 2, 3, 4, 5];
  console.log(param);
})();

//Destructuring
console.log("%cDestructuring", "color:#333; background:#eee; padding:0 0.3rem");
console.log("%cArray", "color:#333; background:#ddd; padding:0 0.3rem");
const coords = [246.57, 143.24, 10.75];

const [x, y, z] = coords;

console.log(x, y, z);

console.log("%cObject", "color:#333; background:#ddd; padding:0 0.3rem");

const car = {
  type: "Mitsubishi",
  color: "Red",
  model: "2013"
};

const { type, color, model } = car;
console.log(type, color, model);

console.log(
  "%cObject Literal",
  "color:#333; background:#eee; padding:0 0.3rem"
);

let type_ = "Kia";
let color_ = "blue";
let model_ = 2017;

const car_ = {
  type_,
  color_,
  model_
};

console.log(car_);
