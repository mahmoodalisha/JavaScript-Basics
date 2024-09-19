var myObject = {
    foo: "bar",
    func: function () {  //func is method
        var self = this;
        console.log("outer func: this.foo = " + this.foo);
        console.log("outer func: self.foo = " + self.foo);
        (function () {  //inner function, iife
            console.log("inner func: this.foo = " + this.foo); //The inner function is an IIFE, so when it executes, its this context is not myObject but rather the global context.
            console.log("inner func: this.foo = " + self.foo);
        } ())
    }
}
myObject.func()