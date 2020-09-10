let age :string = "38"
let message :string = "My age is "
let age2 :number = 25.6
console.log(`${message} ${age}`)

console.log(`${age2}`)


// when working with an array use the type of what held in the array


let friends: Array<string> = ["Adam", "Sam"]

console.log(`${friends}`)


//tuple

let friend :[string, number]
friend = ["Sam", 34]
console.log(friend)

enum priority{High=1, Medium=2, Low=3}

let messagePriority :string = priority[2]

console.log(messagePriority)

//interface
interface UserDataModel {
  userId :string,
  userName :string, 
  email :string,
}

let user :UserDataModel;

// user.userId="1234"
// user.userName="adam"
// user.email="a@a.com"

//this is a union
let anything :string | number = "100"

console.log(anything)

//ts class
class Student{
  private name :string
  constructor(name :string)
  {
    this.name = name
  }

  greet()
  {
    return "Hello from "+this.name
  }

}

let adam = new Student("adam")

console.log(adam.greet())

let u1 = {} as UserDataModel
let u2 = <UserDataModel> {}

u1.email = "a@a.com"

console.log(u1)