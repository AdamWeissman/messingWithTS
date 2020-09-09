var age = "38";
var message = "My age is ";
var age2 = 25.6;
console.log(message + " " + age);
console.log("" + age2);
// when working with an array use the type of what held in the array
var friends = ["Adam", "Sam"];
console.log("" + friends);
//tuple
var friend;
friend = ["Sam", 34];
console.log(friend);
var priority;
(function (priority) {
    priority[priority["High"] = 1] = "High";
    priority[priority["Medium"] = 2] = "Medium";
    priority[priority["Low"] = 3] = "Low";
})(priority || (priority = {}));
var messagePriority = priority[2];
console.log(messagePriority);
var user;
// user.userId="1234"
// user.userName="adam"
// user.email="a@a.com"
//this is a union
var anything = "100";
console.log(anything);
//ts class
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.greet = function () {
        return "Hello from " + this.name;
    };
    return Student;
}());
var adam = new Student("adam");
console.log(adam.greet());
