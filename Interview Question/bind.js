function setUsername() {
  console.log("My Username : ", this.username);
}

function createUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
  setUsername();
}

const result = new createUser("Mayur144", "Mayur144@gmail.com", "Mayur144");
// My Username :  undefined
// createUser { email: 'Mayur144@gmail.com', password: 'Mayur144' }
console.log(result);

function createNewUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
  const context = setUsername.bind(this); // return a function, it won't invoke immediately
  context();
}

const result1 = new createNewUser("Mayur144", "Mayur144@gmail.com", "Mayur144");
// My Username :  Mayur144
// createUser { username: 'Mayur144', email: 'Mayur144@gmail.com', password: 'Mayur144' }
console.log(result1);

// ======================================================================================================= //

const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
const result2 = fullName();
console.log(result2) // Hege Nilsen

// https://www.youtube.com/watch?v=75dMiOY_4ac
