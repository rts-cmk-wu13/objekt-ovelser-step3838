// Objekt med mindst fire egenskaber
const person = {
    name: "Gorius",
    age: "i mellem 81 og 19",
    city: "København",
    job: "HE got no",
    married: false, /* boolean */
    hobbies: ["uhm", "nååååå nice nice nice", "ikke rigtig mere"], /* array */
    pet: { /* object */
        type: "watermelon",
        name: "bob",
    }
};

// Dot notation
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.job);
/* console.log(person.married);
console.log(person.hobbies);
console.log(person.pet) */

// Bracket notation
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);
console.log(person["job"]);
/* console.log(person["married"]);
console.log(person["hobbies"]);
console.log(person["pet"]); */

//hobbies funciton
person.hobbies.forEach(function(hobby) {
    console.log (hobby)
})

//pets
console.log(person.pet.type)
console.log(person.pet.name)