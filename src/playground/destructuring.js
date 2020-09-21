//
// Object destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name, age } = person;

// console.log(`${name} is ${age}.`);

// console.log(`It's ${person.location.temp} in ${person.location.city}`);



// const book = {
//     title: 'Ego',
//     author: 'Ryan',
//     publisher: {
//         name: 'Penquin'
//     }
// }


// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '121121'];

const [, city, state = 'New York', zip] = address;

console.log(`You are in ${address[1]} ${address[2]}.`);
console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);
