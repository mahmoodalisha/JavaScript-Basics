const student = {
    name: "Alisha",
    printName: function() {  //method
        console.log(this.name)
    }
}

student.printName()

//using strict mode, this returns undefined
//Arrow functions in JavaScript do not have their own this. Instead, they inherit this from the surrounding (lexical) scope at the time they are defined.


function OuterFunction() {
    this.value = 1;
    const innerFunction = () => {
      console.log(this.value); // 'this' refers to the 'OuterFunction' context
    };
    innerFunction();
  }
  
  const obj = new OuterFunction(); // Output: 1