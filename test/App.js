export const myNumbers = [1, 2, 3, 4];
const animals = ["Panda", "Bear", "Eagle"];

export default function () {
  console.log(myNumbers, "default");
}

export class Alligator {
  constructor() {
    // ...
    console.log("hello from Alligator");
  }
}
