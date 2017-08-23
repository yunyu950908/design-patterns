var Person = function (name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype = {
    sayName: function () {
        console.log(this.name)
    },
    sayAge: function () {
        console.log(this.age)
    }
};

var Myself = function (name, age, hobby) {
    Person.call(this, name, age);
    this.hobby = hobby;
};

Myself.prototype = create(Person.prototype);
//=>方法等同于
// Myself.prototype = Object.create(Person.prototype)


function create(parentObj) {
    function F() {
    };
    F.prototype = parentObj;
    return new F();
};

Myself.prototype.sayHobby = function () {
    console.log(this.hobby)
};

var me = new Myself('Albert', 23, 'coding')

console.log(me)

me.sayName();
me.sayAge();
me.sayHobby();