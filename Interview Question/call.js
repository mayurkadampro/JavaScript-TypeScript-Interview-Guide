// function that returns product of two numbers
function product(a, b) {
  return a * b;
}

// Calling product() function
const result = product(20, 5);
console.log(result); // 100

// Calling product() function with call
const result1 = product.call(20, 5);
console.log(result1); // NaN

const result2 = product.call(this, 20, 5);
console.log(result2); // 100

// ======================================================================================================= //
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "John Doe":
const result3 = person.fullName.call(person1);
console.log(result3); // John Doe

const result4 = person.fullName.call(person2);
console.log(result4); // Mary Doe

// ======================================================================================================= //

function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUsername(username);

  this.email = email;
  this.password = password;
}

const result5 = new createUser("Mayur144", "Mayur144@gmail.com", "Mayur144");
console.log(result5); // createUser { email: 'Mayur144@gmail.com', password: 'Mayur144' }

function createNewUser(username, email, password) {
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const result6 = new createNewUser("Mayur144", "Mayur144@gmail.com", "Mayur144");
console.log(result6); // createUser { username: 'Mayur144', email: 'Mayur144@gmail.com', password: 'Mayur144' }


// https://www.youtube.com/watch?v=-owpuf4lbyU