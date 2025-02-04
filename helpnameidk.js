// Objekt med mindst fire egenskaber
const person = {
    name: "MICO",
    age: "22",
    ethnicity: "Filipino-Canadian",
    occupation: "singer",
    married: false, /* boolean */
    hobbies: ["music", "twitch streamer", "tik tok"], /* array */
    pet: { /* object */
        type: "dog",
        name: "Argos",
    }
};

// Dot notation
console.log(person.name);
console.log(person.age);
console.log(person.ethnicity);
console.log(person.occupation);
/* console.log(person.married);
console.log(person.hobbies);
console.log(person.pet) */

// Bracket notation
/* console.log(person["name"]);
console.log(person["age"]);
console.log(person["ethnicity"]);
console.log(person["occupation"]); */

/* ----- */

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