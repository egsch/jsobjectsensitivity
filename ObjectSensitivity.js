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

function RandomObjectA () {
    this.aMethod = function ( ) {
        return "6";
    }
}

function RandomObjectB () {
    this.aMethod = function ( ) {
        return "5";
    }
}

function Foo2 (o) {
    this.myObject = o;
    this.doSomething = function () {
        return this.myObject.aMethod();
    }
}

var abc = new RandomObjectA();
var cde = new RandomObjectB();
var a11 = new Foo2(ab);
var a22 = new Foo2(cd);
a11.doSomething();
