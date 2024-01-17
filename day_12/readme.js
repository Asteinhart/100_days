// just watched a video about some js fundamentals
// use let over var
// kind of like a python dict but also can have methods as values

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() { // method
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.id)
      

