Deno.test({
  name:"1st Test",
  fn(){
    console.log("hello")
  }
})

// THIS ONE DOESN'T WORK... check documentation for builtin testing
// docs at manual
// Deno.test({
//   name:"2st Test",
//   ignore:Deno.build.os === "linux",
//   fn(){
//     assert(true);
//   }
// })