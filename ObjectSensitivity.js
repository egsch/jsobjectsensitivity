function RandomObject () {
    this.aMethod = function ( ) {
        return "6";
    }
}

function RandomObject2 () {
    this.aMethod = function ( ) {
        return "5";
    }
}

function Foo (o) {
    this.myObject = o;
    this.doSomething = function () {
        return this.myObject.aMethod();
    }
}

var ab = new RandomObject();
var cd = new RandomObject2();
var a1 = new Foo(ab);
var a2 = new Foo(cd);
a1.doSomething();

function mySecondRandomFunction () {
    print("this is another random irrelevant function.");
}

function myRandomFunction () {
    print("this is a random irrelevant function!");
    mySecondRandomFunction();
}
