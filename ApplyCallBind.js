//Explain Call, Apply, Bind
//with call apply and bind, you can manipulate the context
//lets create  an object

var person = {
    name: "Alisha",
    hello: function(thing) {
        console.log(this.name + "says" + thing);  //prints Alisha says hello world when person.hello("world")
    },
};

var person2 = {
    name: "Person2"
}
person.hello.call(person2, "world")  //call takes an object which is going to become the cotext to hello function, so now it prints "Person2 says hello world"

person.hello.apply(person2, ["world"])

const newHello = person.hello.bind(person2) //bind takes a context and returns a completely new function
newHello("thing")


